import React from "react";
import { Container, Text } from "@components/index";


export const Two = () => {
    return (
        <Container className="py-24 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
                    {sectionData.map(item => {
                        return (
                            <div className="w-full md:w-1/3 p-3">
                                <div className="py-8 px-12 h-full text-center bg-white rounded-xl">
                                    <Text t={item.Number} style="mb-3 text-indigo-600 text-center bigtext font-bold" />
                                    <Text t={item.SubHeading} style="paragraphBig text-gray-700" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    );
};

