import React from "react";
import hunterImgOne from "../../../assets/images/JobHunter/1.png";
import "./JobHunter.css";
const JobHunter = () => {
  return (
    <section>
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70 pt-8 lg:pt-0 ">
        For Job Hunter
      </h2>
      <div className="jobHunterContainer grid grid-cols-4 gap-8">
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobHunter;
