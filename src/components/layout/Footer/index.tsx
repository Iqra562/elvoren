import Link from "next/link"

const Footer = () => {

    return (
        <div className=' bg-[#f0f0f0] py-10 mt-20 border-t-2 border-gray-300'>
            <div className='relative mt-10  '>

                <div className=' px-10 container'>
                    <div className='flex justify-center items-center'>
                        
                        {/* <Link href={'/'}><img src={logo} alt="Nutikals" className="h-10 w-auhref" /></Link> */}
                        <div className="text-blue-500 text-2xl font-bold italic capitalize">
        elvoren 
      </div>
                        </div>
                    <div className='flex flex-col md:flex-row my-10 md:my-1 justify-between py-5'>



                        <ul className='text-[#00000099] w-full leading-5 md:leading-9 text-xs md:text-md flex  flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:justify-evenly'>
                            <li className='text-lg'><Link href='#'>Home </Link> </li>
                            <li className='text-lg'><Link href='#'>Products </Link></li>
                            <li className='text-lg'><Link href='#'> Contact</Link> </li>
                            <li className='text-lg'>Privacy Policy </li>
                            <li className='text-lg'>Terms & Conditions </li>
                        </ul>
                    </div>


                    <div className='flex flex-row justify-center border-t border-gray-300  mt-10     py-4 items-center'>
                        <p className="text-center text-gray-500 tracking-wide">Copyright © 2025 Nutikals. All rights reserved.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer