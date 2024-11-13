import Footer from "../Home/Footer";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import { useEffect, useState } from "react";
import imagePlaceHolder from "./../../assets/imagePlaceholder.png";
import { supabase } from "../../context/Supabase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function SellerPage() {
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    const [isuploadingData, setIsUploadingData] = useState(false);
    const [uploadingState, setUploadingState] = useState("");

    const navigate = useNavigate();
    const { currentUser } = useFirebase();

    useEffect(() => {
        if (!currentUser) navigate("/home");
    }, [currentUser, navigate]);

    useEffect(() => {
        if (isuploadingData) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "unset";
        return () => {
            document.body.style.overflowY = "unset";
        };
    }, [isuploadingData]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const postDataToDB = async (formData) => {

        setIsUploadingData(true);
        setUploadingState("Preparing Data")
        const images = [];
        const { image1, image2, image3 } = formData;

        image1.length === 1 && images.push(uploadAndGetPath(image1[0]));
        image2.length === 1 && images.push(uploadAndGetPath(image2[0]));
        image3.length === 1 && images.push(uploadAndGetPath(image3[0]));

        console.log(formData);
        //formDataTemplate = {
        //     category: "car",
        //     image1: {
        //         0: {},
        //     },
        //     image2: {},
        //     image3: {
        //         0: {},
        //     },
        //     adTitle: "adasdada",
        //     description: "dadadsfsf fasd ss sf",
        //     sellingPrice: "222",
        //     state: "Kerala",
        //     sellerName: "abhura",
        //     contactNo: "9946202959",
        // };

        try {
            setUploadingState("uploading images")
            let imagePaths = await Promise.all(images);
            console.log(`imagesupload finish`);

            setUploadingState("finishing up")
            console.log(`uploading db record`);
            const record = {
                category: formData.category,
                ad_title: formData.adTitle.trim(),
                description: formData.description.trim(),
                selling_price: formData.sellingPrice,
                location: formData.state,
                seller_name: formData.sellerName.trim(),
                seller_contact: formData.contactNo,
                pics: imagePaths,
                creator_uid: currentUser.uid,
            };
            const response = await supabase.from("olxads").insert(record);
            console.log(response);
            reset();
            setImg1(null);
            setImg2(null);
            setImg3(null);
        } catch (errors) {
            console.log(`error uploading images or DB`, ...errors);
        } finally {
            setUploadingState("Ad Posted ✅")
            setIsUploadingData(false);
            setTimeout(() => {
                setUploadingState("")
            }, 3000);
           
        }
    };

    function uploadAndGetPath(img) {
        return new Promise((resolve, reject) => {
            supabase.storage
                .from("olxadpics")
                .upload(
                    `public/${currentUser.uid}/${
                        Math.floor(Math.random() * 100) + img.name
                    }`,
                    img,
                    { cacheControl: "3600", upsert: true }
                )
                .then(({ data }) => {
                    console.log("uploaded : " + img.name);
                    resolve(data.path);
                })
                .catch(({ error }) => {
                    console.log(`error while uploading`);
                    reject(error);
                });
        });
    }

    //base url https://mfoduixzqibzjxlxqkhz.supabase.co/storage/v1/object/public/olxadpics/ + public...

    return (
        <div className="bg-[#f7f8f9]">
            <div className={`${uploadingState === "" ? "hidden" : ""} `}>
                <Snackbar open={open} message={uploadingState} />
            </div>
            {isuploadingData && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
                    <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                    </Box>
                </div>
            )}
            <nav className="h-20 bg-[#f7f8f9] my-auto shadow-md">
                <button
                    onClick={() => navigate(-1)}
                    className="size-10 mt-5 ml-10"
                >
                    <ArrowBackOutlinedIcon fontSize="large" />
                </button>
            </nav>
            <h2 className="text-2xl text-center mt-5 font-semibold">
                Post your Ad
            </h2>
            <form
                className="bg-white rounded-md border flex p-10 mt-3 mb-10 w-2/5 m-auto flex-col gap-2"
                onSubmit={handleSubmit((data) => {
                    console.log(img1[0]);
                    console.log(data.image1[0]);
                    postDataToDB(data);
                })}
            >
                {/* category */}
                <label className="font-semibold text-lg" htmlFor="category">
                    Selet a Category
                </label>
                <select
                    id="category"
                    {...register("category")}
                    name="category"
                    className="border-2 rounded-md px-2 py-1"
                >
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="mobilelPhone">MobilePhone</option>
                    <option value="others">others</option>
                </select>
                <hr className="my-5" />

                {/* imagesupload */}

                <h2 className="text-lg font-semibold">Upload Item Pictures</h2>
                <div className="flex ml-10 ">
                    <div className="flex flex-col justify-center w-1/3">
                        {
                            <img
                                className="size-20 rounded-md mb-2 ml-2"
                                src={img1 ? img1[1] : imagePlaceHolder}
                            ></img>
                        }
                        <input
                            className="appearance-none text-white"
                            type="file"
                            {...register("image1")}
                            onChange={(e) =>
                                setImg1([
                                    e.target.files[0],
                                    URL.createObjectURL(e.target.files[0]),
                                ])
                            }
                            accept="image/*"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-1/3">
                        {
                            <img
                                className="size-20 rounded-md mb-2 ml-2"
                                src={img2 ? img2[1] : imagePlaceHolder}
                            ></img>
                        }
                        <input
                            className="appearance-none text-white"
                            type="file"
                            {...register("image2")}
                            onChange={(e) =>
                                setImg2([
                                    e.target.files[0],
                                    URL.createObjectURL(e.target.files[0]),
                                ])
                            }
                            accept="image/*"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-1/3">
                        {
                            <img
                                className="size-20 rounded-md mb-2 ml-2"
                                src={img3 ? img3[1] : imagePlaceHolder}
                            ></img>
                        }
                        <input
                            className="appearance-none text-white"
                            type="file"
                            {...register("image3")}
                            onChange={(e) =>
                                setImg3([
                                    e.target.files[0],
                                    URL.createObjectURL(e.target.files[0]),
                                ])
                            }
                        />
                    </div>
                </div>

                <hr className="my-5" />
                {/* adtitle */}
                <label htmlFor="adTitle" className="font-semibold text-lg">
                    Ad Title
                </label>
                <input
                    id="adTitle"
                    {...register("adTitle", {
                        required: true,
                        maxLength: 79,
                        minLength: 5,
                        pattern: /^[A-Z][A-Z\s\d]*[A-Z\d]$/i,
                    })}
                    placeholder="Ad title"
                    className="border-2 rounded-md px-2 py-1"
                />
                {errors.adTitle?.type === "pattern" && (
                    <p className="text-xs text-red-600">
                        Invalid characters in Tittle
                    </p>
                )}
                {errors.adTitle?.type === "minLength" && (
                    <p className="text-xs text-red-600">
                        Minimum 5 characters required
                    </p>
                )}
                {errors.adTitle?.type === "required" && (
                    <p className="text-xs text-red-600">Title is required</p>
                )}
                {errors.adTitle?.type === "maxLength" && (
                    <p className="text-xs text-red-600">
                        Max characters allowed is 79
                    </p>
                )}
                <hr className="my-5" />
                {/* description */}
                <label htmlFor="description" className="font-semibold text-lg">
                    Description
                </label>
                <textarea
                    id="description"
                    {...register("description", {
                        required: true,
                        minLength: 10,
                        maxLength: 4000,
                    })}
                    placeholder="Description"
                    className="border-2 rounded-md  h-36 px-2 py-1"
                />
                {errors.description?.type === "minLength" && (
                    <p className="text-xs text-red-600">
                        Minimum 10 characters required
                    </p>
                )}
                {errors.description?.type === "required" && (
                    <p className="text-xs text-red-600">
                        Description is required
                    </p>
                )}
                <hr className="my-5" />
                {/* sellingprice */}
                <label htmlFor="sellingPrice" className="font-semibold text-lg">
                    Selling Price
                </label>
                <input
                    id="sellingPrice"
                    {...register("sellingPrice", {
                        required: true,
                        pattern: /^[1-9][0-9]*$/,
                        max: 10000000,
                    })}
                    placeholder="Selling price"
                    className="border-2 rounded-md px-2 py-1"
                />
                {errors.sellingPrice?.type === "required" && (
                    <p className="text-xs text-red-600">
                        Selling price is required
                    </p>
                )}
                {errors.sellingPrice?.type === "pattern" && (
                    <p className="text-xs text-red-600">
                        Price should contain only numbers
                    </p>
                )}
                {errors.sellingPrice?.type === "max" && (
                    <p className="text-xs text-red-600">
                        Huge Price, Contact customer support for assistance
                    </p>
                )}
                <hr className="my-5" />
                {/*confirm location  */}
                <label htmlFor="sellerState" className="font-semibold text-lg">
                    Confirm your location
                </label>
                <select
                    defaultValue="Kerala"
                    className="border-2 rounded-md px-2 py-1"
                    id="sellerState"
                    {...register("state")}
                >
                    <option value="Andaman & Nicobar Islands">
                        Andaman & Nicobar Islands
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra & Nagar Haveli">
                        Dadra & Nagar Haveli
                    </option>
                    <option value="Daman & Diu">Daman & Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttaranchal">Uttaranchal</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <hr className="my-5" />
                {/* contact info */}
                <label htmlFor="sellername" className="font-semibold text-lg">
                    Contact Details
                </label>
                <input
                    id="sellername"
                    {...register("sellerName", {
                        required: true,
                        maxLength: 79,
                        minLength: 3,
                        pattern: /^[A-Z][A-Z\s]*$/i,
                    })}
                    placeholder="Seller Name"
                    className="border-2 rounded-md px-2 py-1"
                />
                {errors.sellerName?.type === "pattern" && (
                    <p className="text-xs text-red-600">
                        Name should only contin alphabets.
                    </p>
                )}
                {errors.sellerName?.type === "minLength" && (
                    <p className="text-xs text-red-600">
                        Minimum 3 characters required
                    </p>
                )}
                {errors.sellerName?.type === "maxLength" && (
                    <p className="text-xs text-red-600">
                        Maximum only 79 characters
                    </p>
                )}
                {errors.sellerName?.type === "required" && (
                    <p className="text-xs text-red-600">Name is required</p>
                )}
                {/* contacct no */}
                <label
                    htmlFor="contactNo"
                    className="font-semibold text-lg mt-3"
                >
                    Seller contact no
                </label>
                <input
                    id="contactNo"
                    {...register("contactNo", {
                        required: true,
                        pattern: /^[1-9][0-9]{9}/,
                        maxLength: 10,
                    })}
                    placeholder="contact number"
                    className="border-2 rounded-md px-2 py-1"
                />
                {errors.contactNo?.type === "required" && (
                    <p className="text-xs text-red-600">
                        Contact number is required
                    </p>
                )}
                {errors.contactNo?.type === "pattern" && (
                    <p className="text-xs text-red-600">Invalid Phone number</p>
                )}
                {errors.contactNo?.type === "maxLength" && (
                    <p className="text-xs text-red-600">Max 10 digits</p>
                )}
                <input
                    className={`bg-blue-500 w-20 px-2 py-2 rounded-md text-white font-semibold text-center mt-5 `}
                    type="submit"
                />
            </form>
            <Footer />
        </div>
    );
}
