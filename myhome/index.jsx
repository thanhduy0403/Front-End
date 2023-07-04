import React from 'react'
import Head from "next/head";
import Nav from '../header/Nav';
import Banner from '../body/Banner';
import Categogy from '../body/Categogy';
import Allproduct from '../body/Allproduct';
import Hotproduct from '../body/Hotproduct';
import Footer from '../footer/Footer';

const Page = () => {
  return (
    <>
    <Head>
        <title>Home Fres Fruits</title>
      </Head>
    <Nav/>
    <Banner/>
    <Categogy/>
    <Hotproduct/>
    <Allproduct/>
    <Footer/>
    </>
  )
}

export default Page