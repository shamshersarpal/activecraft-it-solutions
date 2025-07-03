import Image from 'next/image';
import recentOne from '../images/portel.webp'; 
import recentTwo from '../images/boma.webp'; 
import recentThree from '../images/hat.webp'; 
import arrowWhite from '../images/icon-small-arrow-white-up-right.svg';

export default function RecentWork() {
    return(
        <>
        <section className="py-20">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[500px]">
                    <div className="tagSection-white">Our Projects</div>

              <h2 className="text-4xl font-bold">
               Our Recent Projects
              </h2>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-5">
                    <div className="relative cursor-pointer">
                        <Image src={recentOne} alt="Project Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        <div className='absolute bottom-0 left-0 w-[calc(100%-30px)] bg-black p-5 hover:bg-colorOrange sm:bottom-[30px] sm:w-auto sm:p-[30px] shadow-2xl'>

                    <h3 className='text-2xl font-bold text-white'>Logistics Service <span>
                        <Image src={arrowWhite} alt="Arrow" width={15} height={15} className='inline-block ml-2' />
                        
                        </span>  </h3>
                    <hr className='border-[#ec8223]/[90%] my-2' />
                    <p className='text-white'>Logistics Solutions That Deliver Excellence web.</p>
                    
                        </div>
                        
                    </div>



                     <div className="relative cursor-pointer">
                        <Image src={recentTwo} alt="Project Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        <div className='absolute bottom-0 left-0 w-[calc(100%-30px)] bg-black p-5 hover:bg-colorOrange sm:bottom-[30px] sm:w-auto sm:p-[30px] shadow-2xl'>

                    <h3 className='text-2xl font-bold text-white'>Boma <span>
                        <Image src={arrowWhite} alt="Arrow" width={15} height={15} className='inline-block ml-2' />
                        
                        </span>  </h3>
                    <hr className='border-[#ec8223]/[90%] my-2' />
                    <p className='text-white'>A single platform for booking an appointment.</p>
                    
                        </div>
                        
                    </div>


                      <div className="relative cursor-pointer">
                        <Image src={recentThree} alt="Project Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        <div className='absolute bottom-0 left-0 w-[calc(100%-30px)] bg-black p-5 hover:bg-colorOrange sm:bottom-[30px] sm:w-auto sm:p-[30px] shadow-2xl'>

                    <h3 className='text-2xl font-bold text-white'>Hats Missourishirt <span>
                        <Image src={arrowWhite} alt="Arrow" width={15} height={15} className='inline-block ml-2' />
                        
                        </span>  </h3>
                    <hr className='border-[#ec8223]/[90%] my-2' />
                    <p className='text-white'>High quality screen printing and embroidery shop.</p>
                    
                        </div>
                        
                    </div>


                    <div className="relative cursor-pointer">
                        <Image src={recentOne} alt="Project Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        <div className='absolute bottom-0 left-0 w-[calc(100%-30px)] bg-black p-5 hover:bg-colorOrange sm:bottom-[30px] sm:w-auto sm:p-[30px] shadow-2xl'>

                    <h3 className='text-2xl font-bold text-white'>Logistics Service <span>
                        <Image src={arrowWhite} alt="Arrow" width={15} height={15} className='inline-block ml-2' />
                        
                        </span>  </h3>
                    <hr className='border-[#ec8223]/[90%] my-2' />
                    <p className='text-white'>Logistics Solutions That Deliver Excellence web.</p>
                    
                        </div>
                        
                    </div>

                    
                </div>

                </div>
        </section>
        </>
    )
}