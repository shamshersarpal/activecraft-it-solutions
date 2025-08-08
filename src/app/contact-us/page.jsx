import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact(){
    return(
       <>
       <Header/>
        <section
        id="home"
        className="bg-no-repeat bg-cover relative -z-10 active"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5 text-white font-bold leading-none">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        <>
  <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
    {/* Email Card */}
    <div className="bg-purple-500 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12H8m0 0H6a2 2 0 00-2 2v0a2 2 0 002 2h12a2 2 0 002-2v0a2 2 0 00-2-2h-2m-4-6h.01"
          />
        </svg>
        <p className="text-lg font-semibold">info@activecraft.com</p>
      </div>
    </div>
    {/* Phone Card */}
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.58 4.74a1 1 0 01-.216.992l-2.272 2.272a16 16 0 006.364 6.364l2.272-2.272a1 1 0 01.992-.216l4.74 1.58a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C10.477 21 3 13.523 3 5z"
          />
        </svg>
        <p className="text-lg font-semibold">+1-646-797-2775</p>
      </div>
    </div>
    {/* Skype Card */}
    <div className="bg-cyan-600 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-3"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 1.7.354 3.32.99 4.78l-.64 2.77a.75.75 0 00.92.92l2.77-.64A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
        <p className="text-lg font-semibold">activecraft@hotmail.com</p>
      </div>
    </div>
  </div>
  {/* Contact Form */}
  <div className="w-full mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name*</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name*</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Phone* (0123456789)
          </label>
          <input
            type="tel"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          defaultValue={""}
        />
      </div>
      
      <button
        type="submit"
        className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600"
      >
        Send Message
      </button>
    </form>
    
  </div>
</>

      </section>


      <Footer/>
       
       </>
    )
}