import React from "react";
import { Heart, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import Image from "next/image";
import { Button } from "./ui/button";

const Advertisement = ({ i }: { i: number }) => {
  return (
    <div
      className="relative rounded-[12px] w-[514px]! flex-shrink-0 h-[599px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          i === 0
            ? `url('/realState/r${i + 1}.png')`
            : `url('/realState/r${i + 1}.jpg')`,
      }}
    >
      <div className="m-6 flex justify-between items-center">
        <div className="flex gap-3">
          <HiPhone
            size={42}
            className="bg-[#F7F7F7] dark:bg-slate-800 dark:hover:dark:bg-slate-700 text-main real-estate-icon"
          />
          <FaWhatsapp
            size={42}
            className="text-[#169A25] bg-[#F7F7F7] dark:bg-slate-800 dark:hover:dark:bg-slate-700  real-estate-icon"
          />
        </div>
        <Heart size={42} className="text-main bg-white dark:bg-slate-800 dark:hover:dark:bg-slate-700 real-estate-icon" />
      </div>
      <div className="p-6 w-[calc(100%-48px)] rounded-[12px] gap-6 flex flex-col justify-end drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] absolute bottom-0 m-6 bg-white dark:bg-slate-900">
        <div className="flex gap-3 w-full flex-col">
          <div className="w-full border-b border-[#ededed] pb-4">
            <div className="flex gap-6 justify-between items-center ">
              <span className="text-main text-2xl font-semibold leading-[150%]  me-auto">
                5,000,000 LE
              </span>
              <Image
                width={44}
                height={44}
                alt="Compound image"
                src="/realState/compound.png"
              />
              <div className="py-1 px-3 rounded-[25px]">
                <span className="text-sm text-main">Villa</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-[20px] leading-[150%]">
                Lorem ipsum dolor sit
              </h2>
              <p className="text-[#7b7b7b]">
                A chic and fully-furnished 2-bedroom apartment with panoramic
                city views .
              </p>
            </div>
          </div>
          <div className="text-sm flex justify-between items-center ">
            <span>Alexandria , Egypt</span>
            <div className="flex gap-[9px]">
              <div className="px-3 border-r border-[#ededed] flex flex-col justify-center items-center">
                <p>400</p>
                <p className="font-semibold">Sq.ft</p>
              </div>
              <div className="px-3 border-r border-[#ededed] flex flex-col justify-center items-center">
                <p>6</p>
                <p className="font-semibold">Rooms</p>
              </div>
              <div className="px-3 border-r  flex flex-col justify-center items-center">
                <p>3</p>
                <p className="font-semibold">Bath</p>
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-main hover:bg-main/95 hover:scale-105 h-[60PX]! rounded-[12px]! dark:text-white">
          View Property Details
        </Button>
      </div>
    </div>
  );
};

export default Advertisement;
