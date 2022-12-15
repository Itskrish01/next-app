import React from "react";
import { Button, Container, Text } from "@components/index";
import Image from "next/image";
import Link from "next/link";



export const Four = () => {
    return (
        <Container className="bg-white overflow-hidden md:py-32 py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-8">
                    <div className="w-full md:w-1/2 py-8 px-12">
                        <Text t={sectionData.title} style="mb-9 bigtext tracking-px-n leading-none" />
                        <Text t={sectionData.subTitle} style="mb-10 paragraphBig text-gray-900 leading-relaxed md:max-w-md" />
                        <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                            <Button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">{sectionData.buttonText}</Button>
                        </div>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-auto p-2">
                                <Image src={sectionData.BigImage} height={600} width={600} objectFit="contain" alt="" />
                            </div>
                            <div className="flex-1 p-2">
                                <Text t={sectionData.description} style="text-gray-600 paragraphRegular md:max-w-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <Image className="transform hover:-translate-x-16 transition ease-in-out duration-1000 rounded-md" src={sectionData.iconImage} height="100%" width="100%" objectFit="contain" alt="">
                    </div>
                </div>
            </div>
        </Container>
    );
};

