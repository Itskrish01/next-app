import React from "react";
import { Button, Container, Text } from "..";
import Image from "next/image";
import Link from "next/link";
import { One } from "src/Templates/flaro/one";
import { Two } from "src/Templates/flaro/two";
import { Three } from "src/Templates/flaro/three";
import { Four } from "src/Templates/flaro/four";



export const Main: React.FC = () => {
  return (
    <>
      <One />
      <Two />
      <Three />
      <Four />
    </>
  );
};
