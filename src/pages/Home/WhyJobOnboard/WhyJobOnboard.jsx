import React, { useState } from "react";
import "./WhyJobOnboard.css";

const WhyJobOnboard = () => {
  const [image, setImage] = useState("https://i.ibb.co/ZS3cfpR/new-Job-Post.png");
  const onBoardData = [
    {
      name: "Easy User Interface",
      url: "https://i.ibb.co/S6cndgG/2.png",
      des: "Choose what kind of offer information you’d like to keep on hand, through custom offer fields.",
    },
    {
      name: "New Hire Onboarding",
      url: "https://i.ibb.co/9wj2ndf/3.png",
      des: "Every job posting can be mapped to the hiring team that is working on it.",
    },
    {
      name: "Easy Hiring Process",
      url: "https://i.ibb.co/ZS3cfpR/new-Job-Post.png",
      des: "Create custom workflow stages for every job posting in your applicant tracking software and accurately depict how candidates move across stages.",
    },
    {
      name: "Understand User Need",
      url: "https://i.ibb.co/bNW6wgR/4.png",
      des: "Make the screening process easier and more efficient, with a custom application form. This way, it’ll be easier to separate the truly qualified from the aspirational.",
    },
    {
      name: "Employee Tracking",
      url: "https://i.ibb.co/SdZcS65/5.png",
      des: "Keep all the hiring process stakeholders in the loop by automatically sending out notifications as soon as specific events occur.",
    },
    {
      name: "Employee Database",
      url: "https://i.ibb.co/Z14G3sp/6.png",
      des: "The hiring team is the hiring manager and associated panel members.",
    },
  ];

  return (
    <div className="py-8 mb-12 lg:mb-0 lg:mt-5 bg-base-300 px-12 lg:px-0 rounded-[40px] container mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-bold pb-5">
        Why Job Onboard{" "}
      </h2>
      <div className="line w-28 md:w-40 rounded-full opacity-70 h-1 mx-auto bg-primary mb-4"></div>
      <div className="hidden lg:grid lg:grid-cols-3 lg:pl-20 ">
        <div className="py-5 col-span-2">
          <img
            className="w-full rounded-lg "
            src={image}
            alt="why-jobOnboard-img"
          />
        </div>
        <div className="gap-y-6 flex flex-col justify-center ">
          {onBoardData.map((button,index) => (
            <button
             key={index}
              onClick={() => setImage(button.url)}
              className={`onBoardBtn ${button.url === image && " active"}`}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:hidden mt-10">
        {onBoardData.map((singleData) => (
          <div className="text-center space-y-2 ">
            <h3 className="text-lg md:text-2xl font-bold ">
              {singleData.name}
            </h3>
            <p>{singleData.des}</p>
            <img
              className="w-full rounded-lg "
              src={singleData.url}
              alt="why-jobOnboard-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJobOnboard;
