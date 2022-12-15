import React from "react";
import { Button, Container, Text } from "@components/index";
import Image from "next/image";
import Link from "next/link";



export const One = () => {
  return (
    <>
      <Container>
        <div className="container mx-auto overflow-hidden">
          <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <Link href="#">
                    <Image src={sectionData.Images.img1} alt="" height="30%" width="100%" objectFit="contain" />
                  </Link>
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
                  <Link href="#">
                    <p>something</p>
                  </Link>
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
              <Image className="absolute left-0 bottom-0" src={sectionData.Images.img2} alt="" height="40%" width="100%" objectFit="contain" />
              <div className="relative z-20 flex flex-wrap items-end -m-8">
                <div className="w-full lg:w-1/2 lg:pr-0 lg:pl-28 lg:py-28 px-16 py-4 mt-12">
                  <Text t={sectionData.Title} style="bigtext mb-7"></Text>
                  <Text t={sectionData.Description} style="paragraphBig mb-10 text-gray-900"></Text>
                  <div className="mb-6 md:inline-block">
                    <Button className="py-4 px-6 w-full font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 text-white">{sectionData.ButtonText}</Button>
                  </div>

                </div>
                <div className="w-full lg:w-1/2 p-8">
                  <Image src={sectionData.Images.img3} alt="" height="100%" width="100%" layout="responsive" objectFit="contain" />
                </div>
              </div>
            </div>
            <Text t={sectionData.subHeading} style="mb-9 text-gray-900 headerSmall text-center"></Text>
            <div className="flex flex-wrap justify-center items-center -m-8">
              <div className="w-auto p-8">
                <Image src={sectionData.Images.img4} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData.Images.img5} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData.Images.img6} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData.Images.img7} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData.Images.img8} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

