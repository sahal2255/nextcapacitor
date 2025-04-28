import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Modal from "@/components/Modal";


export default function Home() {
  return (
    <>
      <div >
       <Header />
       <div className="h-screen flex jsutify-center items-center">
        <h1 className=" mx-auto">Welcome to Happy Birthday App!</h1>
        <Modal />
       </div>
      </div>
    </>
  );
}
