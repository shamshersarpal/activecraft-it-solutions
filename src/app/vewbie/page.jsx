"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import dynamic from "next/dynamic";
import $ from "jquery";

// Attach jQuery to the window object so Owl finds it
if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

// Dynamically import OwlCarousel so it only loads on the client
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import recentOne from "@/images/vewbie-1.png";
import recentTwo from "@/images/vewbie-1.png";
import recentThree from "@/images/vewbie-1.png";

const slides = [
  {
    image: recentOne,
    alt: "Portal Project",
    link: "https://portal.example.com",
  },
  { image: recentTwo, alt: "Boma Project", link: "https://boma.example.com" },
  { image: recentThree, alt: "Hat Project", link: "https://hat.example.com" },
];

export default function Vewbie() {
  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      `<svg
  className="w-3 h-3 text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
`,
      `<svg
  className="w-3 h-3 text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
`,
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
    },
  };

  return (
    <>
      <Header />
      <section
        id="home"
        className="bg-no-repeat bg-cover relative -z-10 active"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5 text-white font-bold leading-none">
              VewBie
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[800px] mx-auto relative rounded-3xl">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {slides.map((slide, idx) => (
              <a key={idx} href={slide.link} className="block">
                <div className="w-full p-4 bg-gray-200 rounded-3xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1200} // use actual image width
                    height={800} // use actual image height
                    className="w-full rounded-3xl object-cover"
                  />
                </div>
              </a>
            ))}
          </OwlCarousel>

          <div className="pt-10">
            <div className="flex items-center justify-between gap-5 mb-8">
              <div>
                <h2 className="font-bold text-[#404A5C] text-2xl">Vewbie</h2>
              </div>
              <div>
                {" "}
                <a
                  className="bg-[#FF9900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ffaa00] transition duration-300 cursor-pointer"
                  href=""
                >
                  view live project <span />{" "}
                </a>
              </div>
            </div>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
