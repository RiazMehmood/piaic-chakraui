'use client'
import { ChakraProvider } from '@chakra-ui/react';
import Cards from './cards';
import Carousel from './carousal';
import Footer from './footer';
import Hero from './hero';
import Nav from "./nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><ChakraProvider><Nav/>{children}<Hero/><Cards/><Carousel/><Footer/></ChakraProvider></body>
    </html>
  )
}
