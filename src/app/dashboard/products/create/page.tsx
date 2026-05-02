import Collapsible from "@/components/ui/Collapsible";
import Link from "next/link";

export default function Page(){
    return(
         <div className="container">
 <div className="mb-10 flex items-center ">
        <div className="space-y-5 ">
          <h1 className="text-2xl font-bold mt-5">List</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm ">
              <Link href='/'>Dashboard</Link>
            </span>{" "}
            <span className="h-[2px] w-[2px] p-[2px] bg-gray-400 rounded-full"></span>
            <span className="text-sm ">
              <Link href='/dashboard/products'>Product</Link>
            </span>{" "}
            <span className="h-[2px] w-[2px] p-[2px] bg-gray-400 rounded-full"></span>
            <span className="text-sm text-gray-400  ">
            Create
            </span>{" "}
          </div>
        </div>

        <div></div>
      </div>

        <form >
        <div className="space-y-5 mb-20">
          <Collapsible
            title="Details"
            description="Title, short description, image..."
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-400 text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  className="border border-gray-200 rounded-lg py-3 placeholder:text-sm outline-none px-3"
                  placeholder="Product Name"
                //   {...register("productName", {
                //     required: "Product Name is required",
                //   })}
                />
                {/* {errors.productName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productName.message}
                  </p>
                )} */}
              </div>
               
            
             

             
            </div>
          </Collapsible>
          <Collapsible
            title="Properties"
            description="Additional functions and attributes..."
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-400 text-sm font-medium">
                  Price
                </label>
                <input
                  type="number"
                  className="border border-gray-200 rounded-lg py-3 placeholder:text-sm outline-none px-3"
                  placeholder="Product price"
                //   {...register("productPrice", {
                //     required: "Product price is required",
                //     valueAsNumber: true,
                //     min: {
                //       value: 1,
                //       message: "Price must be greater than 0",
                //     },
                //     max: {
                //       value: 1000000,
                //       message: "Price is too high",
                //     },
                //   })}
                />
                {/* {errors.productPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productPrice.message}
                  </p>
                )} */}
              </div>
            
          
            </div>
          </Collapsible>

          <div>
            <button
              type="submit"
              className={`bg-[#561a33] ml-auto flex justify-center items-center  px-5 py-3 text-base font-bold text-white  rounded-md `}
              disabled={false}
            >
             
              Create product
            </button>
          </div>
        </div>
      </form>
         </div>

    )
}