import React, { useContext } from "react";
import { InitializeContext } from "../../../App";

import employeImageOne from "../../Assets/images/Employers/1.png";
import employeImageTwo from "../../Assets/images/Employers/2.png";
import employeImageThree from "../../Assets/images/Employers/3.png";
import employeImageFour from "../../Assets/images/Employers/4.png";
import "../ForJobHunter/JobHunter.css";
const ForEmployers = () => {
  const { theme } = useContext(InitializeContext);
  return (
    <section className="container mx-auto px-2  mt-16 md:mt-8  md:py-16 bg-base-100">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="text-center text-2xl md:text-4xl font-bold ">
          For Employers
        </h1>
        <span className="bg-[#895af6] w-40 h-1 mx-auto my-2"></span>
        <p className="text-center text-xl mb-6">
          Find the best talent for your full-time, part-time, contract,{" "}
          <br></br> internship, or freelance jobs in any location.
        </p>
      </div>
      <div className="jobHunterContainer grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-36 mt-32  ">
        <div
          className={
            theme
              ? "bg-[#04071a47] text-white rounded-[10px] shadow-lg p-2 relative text-center"
              : "jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center "
          }
        >
          <div className="avatar hunterImg -mt-24">
            <div
              className={
                theme
                  ? "darkRoundedCircle w-48  rounded-full"
                  : "w-48  rounded-full roundedCircle"
              }
            >
              <img
                className={theme ? "bg-[#0c1325] max-w-full " : "max-w-full"}
                src={employeImageOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-[1.8rem]">
            <h4 className="font-bold text-2xl">
              Post Job Your Company For Free
            </h4>
            <p>Company can post there valuable job here for free</p>
          </div>
        </div>
        <div
          className={
            theme
              ? "bg-[#04071a47] text-white rounded-[10px] shadow-lg p-2 relative text-center"
              : "jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center "
          }
        >
          <div className="avatar hunterImg -mt-24">
            <div
              className={
                theme
                  ? "darkRoundedCircle w-48  rounded-full"
                  : "w-48  rounded-full roundedCircle"
              }
            >
              <img
                className={theme ? "bg-[#0c1325] max-w-full " : "max-w-full"}
                src={employeImageTwo}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-[1.8rem]">
            <h4 className="font-bold text-2xl">Browse Service and PortFolio</h4>
            <p>Choose people by their creativity and previous projects.</p>
          </div>
        </div>
        <div
          className={
            theme
              ? "bg-[#04071a47] text-white rounded-[10px] shadow-lg p-2 relative text-center"
              : "jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center "
          }
        >
          <div className="avatar hunterImg -mt-24">
            <div
              className={
                theme
                  ? "darkRoundedCircle w-48  rounded-full"
                  : "w-48  rounded-full roundedCircle"
              }
            >
              <img
                className={theme ? "bg-[#0c1325] max-w-full " : "max-w-full"}
                src={employeImageThree}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-[1.8rem]">
            <h4 className="font-bold text-2xl">
              Find Best Match For Your Company
            </h4>
            <p>Select the best candidate form among the applied candidates.</p>
          </div>
        </div>
        <div
          className={
            theme
              ? "bg-[#04071a47] text-white rounded-[10px] shadow-lg p-2 relative text-center"
              : "jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center "
          }
        >
          <div className="avatar hunterImg -mt-24">
            <div
              className={
                theme
                  ? "darkRoundedCircle w-48  rounded-full"
                  : "w-48  rounded-full roundedCircle"
              }
            >
              <img
                className={theme ? "bg-[#0c1325] max-w-full " : "max-w-full"}
                src={employeImageFour}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-[1.8rem]">
            <h4 className="font-bold text-2xl">Strong Community BuildUp</h4>
            <p>Building strong rellationships with another companies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
