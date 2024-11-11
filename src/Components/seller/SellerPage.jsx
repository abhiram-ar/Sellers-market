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
            <div className="h-[40em] bg-red-300 mx-40 my-10 p-10 rounded-md border">
                <h2 className="text-2xl font-semibold">Post your Ad</h2>
                <form
                    className="bg-slate-400 flex flex-col gap-3"
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    {/* category */}
                    <select {...register("category")} name="category">
                        <option value="car">Car</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="mobilelPhone">MobilePhone</option>
                        <option value="others">others</option>
                    </select>

                    {/* adtitle */}
                    <input
                        {...register("adTitle", { required: true })}
                        placeholder="Ad title"
                    />

                    {/* description */}
                    <input
                        {...register("description", { required: true })}
                        placeholder="Description"
                    />

                    {/* sellingprice */}
                    <input
                        {...register("sellingPrice", {
                            required: true,
                            pattern: /^[1-9][0-9]*/,
                        })}
                        placeholder="Selling price"
                    />

                    {errors.sellingPrice && <p>{errors.sellingPrice.type}</p>}

                    <select {...register("state")}>
                        <option value="Andaman & Nicobar Islands">
                            Andaman & Nicobar Islands
                        </option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                        </option>
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
                        <option value="Himachal Pradesh">
                            Himachal Pradesh
                        </option>
                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option selected value="Kerala">Kerala</option>
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

                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
}
