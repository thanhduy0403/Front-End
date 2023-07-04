import Head from "next/head";

import { Inter } from "next/font/google";s

import Page from "./myhome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Page/>
    </>
  );
}
