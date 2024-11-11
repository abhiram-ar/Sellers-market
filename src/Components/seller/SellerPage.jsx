import Footer from "../Home/Footer";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useForm } from "react-hook-form";
export default function SellerPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="bg-[#f7f8f9]">
            <nav className="h-20 bg-[#f7f8f9] my-auto shadow-md">
                <button className="size-10 mt-5 ml-10">
                    <ArrowBackOutlinedIcon fontSize="large" />
                </button>
            </nav>
            <h2 className="text-2xl text-center mt-5 font-semibold">
                Post your Ad
            </h2>
            <form
                className="bg-white rounded-md border flex p-10 mt-3 mb-10 w-2/5 m-auto flex-col gap-2"
                onSubmit={handleSubmit((data) => console.log(data))}
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
                        pattern: /^[A-Z]+$/i,
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
                        pattern: /^[1-9][0-9]*/,
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
                    <option selected value="Kerala">
                        Kerala
                    </option>
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
                        pattern: /^[A-Z]+$/i,
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
                {errors.sellerName?.type === "required" && (
                    <p className="text-xs text-red-600">Name is required</p>
                )}
                {/* contacct no */}
                <label htmlFor="contactNo" className="font-semibold text-lg mt-3">
                    Seller contact no
                </label>
                <input
                    id="contactNo"
                    {...register("contactNo", {
                        required: true,
                        pattern: /^[1-9][0-9]{9}/,
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
                <input
                    className={`bg-blue-500 w-20 px-2 py-2 rounded-md text-white font-semibold text-center mt-5 `}
                    type="submit"
                />
            </form>
            <Footer />
        </div>
    );
}
