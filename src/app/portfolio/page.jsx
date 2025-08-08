"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import vewbie from "@/images/vewbie-0.png";
import vewbieApp from "@/images/vewbie-app-0.png";
import studyheights from "@/images/studyheights-0.png";

// Portfolio items
const portfolioData = [
  {
    title: "Vewbie",
    category: "Websites",
    description: "Live streaming",
    image: vewbie,
    link: "vewbie",
  },
  {
    title: "Vewbie App",
    category: "Mobile Application",
    description: "Auto Leasing",
    image: vewbieApp,
    link: "vewbie",
  },
  {
    title: "Study Heights",
    category: "Websites",
    description: "Online courses",
    image: studyheights,
    link: "vewbie",
  },
];

const categories = ["All", "Websites", "Mobile Application"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

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
              Portfolio
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:text-orange-500 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPortfolio.map((item, index) => (
            <Link href={item.link || "#"} key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                <div className="p-4 bg-[#3e495b75]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="mx-auto mb-4 rounded-md"
                    />
                  ) : (
                    <div
                      className="mx-auto mb-4 rounded-md bg-gray-200 flex items-center justify-center"
                      style={{ width: 300, height: 200 }}
                    >
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white text-center p-4">
                  <div className="flex justify-center mb-2">
                    <div className="bg-[#FF9900] w-15 flex items-center justify-center h-15 rounded-full text-white">
                      <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-xl">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
