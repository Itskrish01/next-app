import React from "react";
import { Button, Container, Text } from "..";
import Image from "next/image";
import Link from "next/link";
import { sectionData_1, sectionData_2, sectionData_3 } from "src/sections/sections";


export const Main: React.FC = () => {
  return (
    <>
      <Container>
        <div className="container mx-auto overflow-hidden">
          <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <Link href="#">
                    <Image src={sectionData_1.Images.img1} alt="" height="30%" width="100%" objectFit="contain" />
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
              <Image className="absolute left-0 bottom-0" src={sectionData_1.Images.img2} alt="" height="40%" width="100%" objectFit="contain" />
              <div className="relative z-20 flex flex-wrap items-end -m-8">
                <div className="w-full lg:w-1/2 lg:pr-0 lg:pl-28 lg:py-28 px-16 py-4 mt-12">
                  <Text t={sectionData_1.Title} style="bigtext mb-7"></Text>
                  <Text t={sectionData_1.Description} style="paragraphBig mb-10 text-gray-900"></Text>
                  <div className="mb-6 md:inline-block">
                    <Button className="py-4 px-6 w-full font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 text-white">{sectionData_1.ButtonText}</Button>
                  </div>

                </div>
                <div className="w-full lg:w-1/2 p-8">
                  <Image src={sectionData_1.Images.img3} alt="" height="100%" width="100%" layout="responsive" objectFit="contain" />
                </div>
              </div>
            </div>
            <Text t={sectionData_1.subHeading} style="mb-9 text-gray-900 headerSmall text-center"></Text>
            <div className="flex flex-wrap justify-center items-center -m-8">
              <div className="w-auto p-8">
                <Image src={sectionData_1.Images.img4} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData_1.Images.img5} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData_1.Images.img6} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData_1.Images.img7} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
              <div className="w-auto p-8">
                <Image src={sectionData_1.Images.img8} alt="" height="50%" width="100%" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            {sectionData_2.map(item => {
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
      <Container className="py-36 bg-blueGray-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
            <div className="w-full md:w-1/2 p-8 lg:p-14">
              <div className="relative max-w-max mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-4xl">
                <Image className="transform hover:scale-105 transition ease-in-out duration-1000" src={sectionData_3.BigImage} alt="" height={600} width={600} objectFit="contain" />
                <div className="absolute bottom-0 left-0 w-full px-16 pb-10">
                  <div className="overflow-hidden rounded-lg" style={{ backdropFilter: "8px" }}>
                    <div className="flex flex-wrap sm:divide-x divide-y sm:divide-y-0 divide-gray-300">
                      <div className="w-full sm:w-1/3">
                        <Link href="#">
                          <a className="flex justify-center items-center h-full py-6 bg-white bg-opacity-80 hover:bg-opacity-60 transition ease-in-out duration-200">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.0405 1.94343C15.439 2.21077 14.804 2.37786 14.1357 2.47812C14.804 2.0771 15.3387 1.44217 15.5726 0.67356C14.9377 1.04115 14.2359 1.3085 13.4673 1.47558C12.8658 0.840649 11.997 0.439636 11.0613 0.439636C9.2567 0.439636 7.78632 1.91001 7.78632 3.71457C7.78632 3.98191 7.81974 4.21584 7.88658 4.44976C5.17974 4.31609 2.74025 3.0128 1.10278 1.00774C0.835443 1.509 0.668354 2.04369 0.668354 2.6452C0.668354 3.78141 1.23646 4.78394 2.13873 5.38546C1.60405 5.35204 1.10278 5.21837 0.634936 4.98444V5.01786C0.634936 6.62191 1.77114 7.95862 3.27494 8.25938C3.00759 8.32621 2.70683 8.35963 2.40607 8.35963C2.20557 8.35963 1.97164 8.32621 1.77114 8.2928C2.20557 9.59609 3.40861 10.5652 4.84557 10.5652C3.70937 11.4341 2.30582 11.9687 0.768607 11.9687C0.501266 11.9687 0.233924 11.9687 0 11.9353C1.47038 12.871 3.17468 13.4057 5.04607 13.4057C11.0947 13.4057 14.403 8.39305 14.403 4.04875C14.403 3.91508 14.403 3.74799 14.403 3.61432C15.038 3.17989 15.6061 2.61179 16.0405 1.94343Z" fill="black"></path>
                            </svg>
                          </a>
                        </Link>
                      </div>
                      <div className="w-full sm:w-1/3">
                        <Link href="#">
                          <a className="flex justify-center items-center h-full py-6 bg-white bg-opacity-80 hover:bg-opacity-60 transition ease-in-out duration-200">
                            <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.72336 18.3242V10.3519H0.0405273V7.24494H2.72336V4.95365C2.72336 2.29463 4.3474 0.846741 6.71944 0.846741C7.85566 0.846741 8.83219 0.931335 9.11678 0.969146V3.74798L7.47165 3.74873C6.1816 3.74873 5.93182 4.36174 5.93182 5.26129V7.24494H9.00845L8.60786 10.3519H5.93182V18.3242H2.72336Z" fill="black"></path>
                            </svg>
                          </a>
                        </Link>
                      </div>
                      <div className="w-full sm:w-1/3">
                        <Link href="#">
                          <a className="flex justify-center items-center h-full py-6 bg-white bg-opacity-80 hover:bg-opacity-60 transition ease-in-out duration-200">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.84125 2.30226C12.4377 2.30226 12.7452 2.31198 13.7709 2.35875C14.3876 2.3663 14.9985 2.47954 15.5769 2.69356C15.9964 2.85533 16.3773 3.10314 16.6952 3.42105C17.0131 3.73895 17.2609 4.1199 17.4227 4.53937C17.6367 5.1178 17.75 5.72865 17.7575 6.34536C17.8038 7.37107 17.814 7.67855 17.814 10.275C17.814 12.8715 17.8043 13.1789 17.7575 14.2046C17.75 14.8214 17.6367 15.4322 17.4227 16.0106C17.2609 16.4301 17.0131 16.8111 16.6952 17.129C16.3773 17.4469 15.9964 17.6947 15.5769 17.8564C14.9985 18.0705 14.3876 18.1837 13.7709 18.1912C12.7457 18.2376 12.4382 18.2477 9.84125 18.2477C7.24433 18.2477 6.93685 18.238 5.91161 18.1912C5.2949 18.1837 4.68405 18.0705 4.10562 17.8564C3.68615 17.6947 3.3052 17.4469 2.98729 17.129C2.66939 16.8111 2.42158 16.4301 2.25981 16.0106C2.04579 15.4322 1.93255 14.8214 1.925 14.2046C1.8787 13.1789 1.86851 12.8715 1.86851 10.275C1.86851 7.67855 1.87823 7.37107 1.925 6.34536C1.93255 5.72865 2.04579 5.1178 2.25981 4.53937C2.42158 4.1199 2.66939 3.73895 2.98729 3.42105C3.3052 3.10314 3.68615 2.85533 4.10562 2.69356C4.68405 2.47954 5.2949 2.3663 5.91161 2.35875C6.93732 2.31245 7.2448 2.30226 9.84125 2.30226ZM9.84125 0.549988C7.20173 0.549988 6.86924 0.561102 5.83196 0.608335C5.02484 0.624389 4.22629 0.777209 3.47028 1.0603C2.82174 1.30464 2.23433 1.68756 1.74904 2.18232C1.25382 2.6678 0.870581 3.25554 0.626081 3.90449C0.342994 4.66051 0.190174 5.45906 0.17412 6.26617C0.127813 7.30253 0.116699 7.63502 0.116699 10.2745C0.116699 12.9141 0.127813 13.2465 0.175047 14.2838C0.1911 15.0909 0.343921 15.8895 0.627007 16.6455C0.871236 17.2944 1.25416 17.8821 1.74904 18.3677C2.2346 18.8626 2.82234 19.2455 3.47121 19.4897C4.22722 19.7728 5.02577 19.9256 5.83288 19.9417C6.87017 19.988 7.20127 20 9.84218 20C12.4831 20 12.8142 19.9889 13.8515 19.9417C14.6586 19.9256 15.4571 19.7728 16.2132 19.4897C16.8589 19.2394 17.4454 18.857 17.935 18.3671C18.4246 17.8772 18.8065 17.2905 19.0564 16.6446C19.3395 15.8886 19.4923 15.09 19.5084 14.2829C19.5547 13.2465 19.5658 12.9141 19.5658 10.2745C19.5658 7.63502 19.5547 7.30253 19.5075 6.26524C19.4914 5.45813 19.3386 4.65958 19.0555 3.90357C18.8113 3.2547 18.4283 2.66696 17.9335 2.1814C17.4479 1.68652 16.8602 1.3036 16.2113 1.05937C15.4553 0.776283 14.6567 0.623463 13.8496 0.607409C12.8133 0.561102 12.4808 0.549988 9.84125 0.549988Z" fill="black"></path>
                              <path d="M9.83852 5.28125C8.85084 5.28125 7.88534 5.57413 7.06412 6.12286C6.24289 6.67158 5.60283 7.4515 5.22486 8.364C4.84689 9.27649 4.748 10.2806 4.94068 11.2493C5.13337 12.218 5.60898 13.1078 6.30738 13.8062C7.00577 14.5046 7.89558 14.9802 8.86428 15.1729C9.83298 15.3656 10.8371 15.2667 11.7496 14.8887C12.6621 14.5107 13.442 13.8707 13.9907 13.0494C14.5394 12.2282 14.8323 11.2627 14.8323 10.275C14.8323 8.9506 14.3062 7.68041 13.3697 6.7439C12.4331 5.80738 11.163 5.28125 9.83852 5.28125ZM9.83852 13.5166C9.19741 13.5166 8.57069 13.3264 8.03763 12.9703C7.50456 12.6141 7.08909 12.1078 6.84375 11.5155C6.5984 10.9232 6.53421 10.2714 6.65929 9.64265C6.78436 9.01386 7.09308 8.43627 7.54642 7.98294C7.99975 7.52961 8.57734 7.22088 9.20613 7.09581C9.83492 6.97073 10.4867 7.03492 11.079 7.28027C11.6713 7.52561 12.1776 7.94108 12.5337 8.47415C12.8899 9.00721 13.08 9.63393 13.08 10.275C13.08 11.1347 12.7385 11.9592 12.1306 12.5671C11.5227 13.175 10.6982 13.5166 9.83852 13.5166Z" fill="black"></path>
                              <path d="M15.0336 6.25046C15.6781 6.25046 16.2006 5.728 16.2006 5.08351C16.2006 4.43902 15.6781 3.91656 15.0336 3.91656C14.3892 3.91656 13.8667 4.43902 13.8667 5.08351C13.8667 5.728 14.3892 6.25046 15.0336 6.25046Z" fill="black"></path>
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-14">
              <div className="md:max-w-sm">

                <Text t={sectionData_3.BigHeading} style="bigtext mb-8 font-bold font-heading tracking-px-n leading-none" />
                <Text t={sectionData_3.SubHeading} style="mb-7 paragraphRegular text-gray-900" />
                <Text t={sectionData_3.Paragraph} style="paragraphRegular text-gray-600 font-medium" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
