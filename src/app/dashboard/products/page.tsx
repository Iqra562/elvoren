

"use client"

import { Button, ConfigProvider, Flex, Popover } from "antd";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
   import { MdOutlineAdd } from "react-icons/md";
 import { useState } from "react";
 import { notification } from "antd";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/ui/Modal";


export default function Page() {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const [productId, setProductId] = useState(null);

 const closeModalHandler = () => {
    setIsModalOpen(false);
    setProductId(null);
  };
      
      const [api, contextHolder] = notification.useNotification();
const content = (
                  <div className=" ">
                    <ul className="space-y-2 w-20">
                      <li className="space-y-2">
                     
                        <Link href='/'>
                          <span className="flex items-center space-x-2 cursor-pointer">
                            <MdEdit className="text-dark text-base" />{" "}
                            <span className="font-semibold text-sm"> Edit</span>
                          </span>
                        </Link>
                        <span
                          className="flex items-center space-x-2 cursor-pointer"
                        //   onClick={() => openModalHandler(element._id)}
                        >
                          <MdDelete className="text-red-500 text-base" />{" "}
                          <span className="font-semibold text-sm text-red-500">
                            Delete
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                );
  return (
     <div className="container">
      {contextHolder}
        <Modal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        // onDelete={productDeleteHandler}
        // isLoading={deleteProductLoading}
        title="Delete Product?"
        text="Deleting this product will permanently remove it."
      />
     
      <div className="mb-10 flex items-center ">
        <div className="space-y-5 ">
          <h1 className="text-2xl font-bold mt-5">List</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm ">
              <Link href='/'>Dashboard</Link>
            </span>{" "}
            <span className="h-[2px] w-[2px] p-[2px] bg-gray-400 rounded-full"></span>
            <span className="text-sm ">
              <Link href='/dashboard/producrs'>Product</Link>
            </span>{" "}
            <span className="h-[2px] w-[2px] p-[2px] bg-gray-400 rounded-full"></span>
            <span className="text-sm text-gray-400  ">List</span>{" "}
          </div>
        </div>
        <button className="bg-primary-button-gradient ml-auto flex justify-center items-center  px-5 py-3 text-sm font-bold text-white  rounded-md">
          <MdOutlineAdd className="font-bold" />
          Add product{" "}
        </button>
        <div></div>
      </div>
      <div className="">
        <div className="w-full overflow-x-auto table-scrollbar bg-white rounded-xl">
          <table className=" w-full min-w-max table-auto  table-scrollbar  ">
            <thead className="py-10  rounded-lg bg-gray-50">
              <tr className="bg-gray-50 rounded-full   w-full">
                <th className="text-start  px-4 py-4  whitespace-nowrap w-20 ">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className=" w-4 h-4 border-gray-600 rounded "
                  />
                </th>
                <th className="text-gray-500 text-xs text-start uppercase py-3 ">
                  <span className="border-l-2 border-gray-200 pl-2">
                    Product
                  </span>
                </th>
                <th className="text-gray-500 text-xs text-start   uppercase py-3 ">
                  <span className="border-l-2 border-gray-200 pl-2">
                    Description
                  </span>
                </th>
              
                <th className="text-gray-500 text-xs text-start   uppercase py-3">
                  <span className="border-l-2 border-gray-200 pl-2">Price</span>
                </th>
              
                <th className="text-gray-500 text-xs text-start   uppercase py-3">
                  <span className="border-l-2 border-gray-200 pl-2">Stock</span>
                </th>
                <th className="text-gray-500 text-xs text-start   uppercase py-3">
                  <span className="border-l-2 border-gray-200 pl-2">
                    Create at
                  </span>
                </th>
                <th className="text-gray-500 text-xs text-start   uppercase py-3"></th>
              </tr>
            </thead>
            <tbody>
              {/* {getProducts.map((element, i) => { */}
              

                
                   <tr
                    // key={i}
                    className="w-full border border-gray-100 hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="px-4 ">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className=" w-4 h-4 border-gray-600 rounded "
                      />
                    </td>
                    <td className=" py-4 pl-2 text-base text-dark flex justify-start items-center space-x-4  max-w-full pr-5">
                      {/* <Image
                        src='#'
                        alt="product image"
                        className="w-20 h-20 object-cover object-top rounded-md"
                      />{" "} */}
                      <span className="capitalize ">
                        {/* {element.name} */}
                        name
                        </span>
                    </td>
                    <td className="py-2 pl-2 text-base text-dark  max-w-[350px] truncate pr-10">
                      {/* {element.description} */}
                      description
                    </td>
                  
                    <td className="py-2 pl-2 text-base text-dark min-w-[100px]">
                      {" "}
                      <span className="text-gray-400 font-semibold">
                        $
                      </span>{" "}
                      {/* {element.price} */} 20
                    </td>
                    <td className="py-2 pl-2 text-base text-dark min-w-[100px]">
                     
                      {/* {element.stock} */}
                      20
                    </td>
                
                  
                   
                    {/* <td className="py-2 pl-2 text-base text-dark min-w-[100px]">
                      {" "}
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm ">
                          {new Date(element.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </span>

                        <span className="text-gray-500 text-xs">
                          {new Date(element.createdAt)
                            .toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })
                            .toLowerCase()}
                        </span>
                      </div>
                    </td> */}
                    <td className="py-2 text-base text-dark min-w-[100px]">
                      {" "}
                      <Popover
                        placement="right"
                        content={content}
                        arrow={false}
                        className=""
                      >
                        <Button className="w-full h-auto p-0 border-none shadow-none bg-transparent">
                          <div
                            className={`flex  flex-row justify-center items-start transition-all duration-500   w-full    py-3 rounded cursor-pointer    `}
                          >
                            <PiDotsThreeOutlineVerticalFill className="text-base   hover:text-black" />
                          </div>
                        </Button>
                      </Popover>
                    </td>
                  </tr>
                
              

              {/* })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}