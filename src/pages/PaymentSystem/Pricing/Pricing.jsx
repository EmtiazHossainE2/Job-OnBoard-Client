import React, { useState } from "react";
// import pricingBg from "../../Assets/images/pricing/pattern.svg";
import Footer from "../../../Shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BASE_API } from "../../../config";

const Pricing = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState([]);

  const pricingNavigate = (paymentId) => {
    // navigate('/signUp/hr')
    navigate(`${paymentId}`);
  };

  // get data from json
  useEffect(() => {
    fetch(`${BASE_API}/makePayment`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, []);

  // const priceFreeN = payment[0].price;
  // console.log(priceFreeN);

  const priceFree = payment[0]?.price;
  const priceStandard = payment[1]?.price;
  const priceBusiness = payment[2]?.price;
  // console.log(priceFree)

  return (
    <section className="container mx-auto px-5">
      <div className="Pricing_header w-full flex justify-center items-center">
        <div className="pt-8 md:pt-28 pb-5 text-center">
          <h1 className="text-xl md:text-4xl lg:text-5xl px-12 md:px-16 lg:px-24 text-black font-bold ">
            Smart, affordable HR software. For every growing business.
          </h1>
          <p className="py-3 md:py-5 text-sm md:text-xl font-medium">
            Try Job Onboard for 21 days. No credit card required.{" "}
          </p>
          <button className="btn btn-wide text-white bg-[#895AF6] border-none">
            Start Free Trial
          </button>
        </div>
      </div>
      {/* <div className="w-full h-28">
        <img className="" src={pricingBg} alt="" />
      </div> */}
      {/* toast  */}

      {/* pricing section  */}
      <div className="pricing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-8 md:px-14 lg:px-16 my-2">
        {/* Free Pricing */}
        <div className="our_pricing p-3 border-2 border-gray rounded">
          <h2 className="text-3xl font-medium">Free</h2>
          <div className="button flex justify-center items-center my-3">
            <button className="px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]">
              {" "}
              <span className="font-bold">${priceFree} </span>{" "}
              <span className="text-black">/Lifetime</span>{" "}
            </button>
          </div>
          <div className="pricing_offer">
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">1 Company</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">2 Active Jobs</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">25 Active Candidates</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">No Team Account</span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500">In app messaging</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Quiz</span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Detailed Analyties
              </span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Smart Workflow
              </span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Remote Interview
              </span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Custom domain
              </span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Screening Questions
              </span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">24/7 Support</span>{" "}
            </li>
          </div>
          <button
            onClick={() => pricingNavigate(payment[0]._id)}
            className="btn bg-[#60CE83] border-none w-full"
          >
            Free
          </button>
        </div>
        {/* StartUp Lifetime  */}
        <div className="our_pricing p-3 border-2 border-transparent">
          <h2 className="text-3xl font-medium">Startup</h2>
          <div className="button flex justify-center items-center my-3">
            <button className="px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]">
              <span className="text-gray-500 line-through">$499.99</span>{" "}
              <span className="font-bold">${priceStandard}</span>{" "}
              <span className="text-black">/Lifetime</span>{" "}
            </button>
          </div>
          <div className="pricing_offer">
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">1 Company</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">6 Active Jobs</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">100 Active Candidates</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">3 Team Account</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">In app messaging</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Quiz</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Detailed Analyties</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Smart Workflow</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Remote Interview</span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Custom domain
              </span>{" "}
            </li>
            <li className="my-2 text-center text-gray-500">
              {" "}
              <span className="text-gray-500 line-through">
                Screening Questions
              </span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">24/7 Support</span>{" "}
            </li>
          </div>
          <button
            onClick={() => pricingNavigate(payment[1]._id)}
            className="btn bg-[#895AF6] border-none w-full"
          >
            Purchase
          </button>
        </div>
        {/* Business Lifetime  */}
        <div className="our_pricing p-3 border-2 border-transparent">
          <h2 className="text-3xl font-medium">Business</h2>
          <div className="button flex justify-center items-center my-3">
            <button className="px-5 py-3 text-blue-500 rounded-full w-4/5 bg-[#E6ECFF]">
              <span className="text-gray-500 line-through">$999.99</span>{" "}
              <span className="font-bold">${priceBusiness}</span>{" "}
              <span className="text-black">/Lifetime</span>{" "}
            </button>
          </div>
          <div className="pricing_offer">
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">1 Company</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Unlimited Active Jobs</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">1000 Active Candidates</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">10 Team Account</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">In app messaging</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Quiz</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Detailed Analyties</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Smart Workflow</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Remote Interview</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Custom domain</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">Screening Questions</span>{" "}
            </li>
            <li className="my-2 text-center text-sky-500">
              {" "}
              <span className="text-black">24/7 Support</span>{" "}
            </li>
          </div>
          <button
            onClick={() => pricingNavigate(payment[2]._id)}
            className="btn bg-[#895AF6] border-none w-full"
          >
            Purchase
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
