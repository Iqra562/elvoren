type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
   <section className="container min-h-screen pt-20">
   
        <div className="flex flex-col  md:flex-row pt-10 space-y-10 md:space-y-0 ">
        <div className="w-full md:w-6/12 md:border-r-2 md:pr-2 lg:pr-20 xl:pr-32">
          <div className=" rounded-md overflow-hidden">
            <img
              src={`https://shop-co-vert-mu.vercel.app/assets/banner-img-D9CBTe-8.png`}
              className="w-full   "
              alt=""
            />
           
          </div>
        </div>
        <div className="md:pl-8 pt-2 md:pt-0 space-y-4 md:space-y-14 w-full md:w-6/12">
          <div className="space-y-4">
            <div className="flex justify-between items-baseline ">
              <h2 className="text-2xl md:text-3xl font-bold capitalize text-paragraphDark">
          PRODUCT NAME
               </h2>
            </div>

            <div className="flex flex-col-reverse items-start ">
              <div className="flex space-x-1 items-center">
                <span
                  className={`block text-secondary  text-lg md:text-2xl  font-bold`}
                >
                  $89
                </span>
                
              </div>
                
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Description:</h3>
            <p className="text-gray-600 capitalize">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur laudantium ab dolorum? Exercitationem iure nobis perspiciatis dolore nostrum tempore?</p>
          </div>
         
          {/* <Alert message="Error Text" type="error" /> */}

          <div>
                           <button className='bg-[#561a33] w-full px-2 py-2 text-base font-bold text-white rounded-md '>Add to cart</button>

          </div>
        </div>
      </div>
     
    </section>
  );
}