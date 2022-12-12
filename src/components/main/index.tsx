import React from "react";
import { Button, Container, Img } from "..";


export const Main: React.FC = () => {
  return (
    <Container>
      <div className="container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  <Img src="assets/flaro-assets/logos/flaro-logo-black.svg" alt="" className />
                </a>
              </div>
              <div className="w-auto hidden lg:block">

              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">

                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">

                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>

        </div>
      </div>
      <div className="overflow-hidden pb-16">
        <div className="container px-4 mx-auto">
          <div className="mb-16 relative bg-indigo-50 overflow-hidden rounded-3xl">
            <img className="absolute left-0 bottom-0" src="assets/flaro-assets/images/headers/gradient3.svg" alt="" />
            <div className="relative z-20 flex flex-wrap items-end -m-8">
              <div className="w-full lg:w-1/2 lg:pr-0 lg:pl-28 lg:py-28 px-16 py-4 mt-12">
                <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading leading-none">Jahanvee Narang</h2>
                <p className="mb-10 text-lg text-gray-900 font-medium">Data Analyst @ Lowe's | Aiding Fortune 50 company make better data-driven decision | Customer Analytics | Marketing Analytics | Web Analytics</p>
                <div className="mb-6 md:inline-block">
                  <Button className="py-4 px-6 w-full font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 text-white">LEARN MORE</Button>
                </div>

              </div>
              <div className="w-full lg:w-1/2 p-8">
                <Img src="assets/flaro-assets/images/headers/profiles.png" alt="" className />
              </div>
            </div>
          </div>
          <p className="mb-9 text-gray-900 text-center font-medium">Brands I have worked with</p>
          <div className="flex flex-wrap justify-center items-center -m-8">
            <div className="w-auto p-8">
              <Img src="assets/flaro-assets/logos/brands/brand-xl.png" alt="" className />
            </div>
            <div className="w-auto p-8">
              <Img src="assets/flaro-assets/logos/brands/brand-xl-2.png" alt="" className />
            </div>
            <div className="w-auto p-8">
              <Img src="assets/flaro-assets/logos/brands/brand-xl-3.png" alt="" className />
            </div>
            <div className="w-auto p-8">
              <Img src="assets/flaro-assets/logos/brands/brand-xl-4.png" alt="" className />
            </div>
            <div className="w-auto p-8">
              <Img src="assets/flaro-assets/logos/brands/brand-xl-5.png" alt="" className />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
