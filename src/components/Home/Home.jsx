import React from "react";
import "./Home.scss";
// import Button from "react-bootstrap/Button";
import PriceCheckRoundedIcon from "@mui/icons-material/PriceCheckRounded";
import SendToMobileRoundedIcon from "@mui/icons-material/SendToMobileRounded";
// import Contact from "./Contact";
// import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const navigation = () => {
    history("/contactus");
  };
  return (
    <>
      <section className="mainSec">
        <div className="divMain">
          <div
            className="background"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap ccc">
              <div className="w-full px-4 ml-auto mr-auto text-center2">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Convenient ways to send and receive money
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Our customers made millions of transfers with Western Union
                    last year—here’s why:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center2 inline-flex items-center justify-center w-83 h-83 mb-5 shadow-lg rounded-full bg-red-400">
                      <PriceCheckRoundedIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Send online</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      create your profile for free to send money online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center2 inline-flex items-center justify-center w-83 h-83 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <SendToMobileRoundedIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Send with our app</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Send money, pay bills, check exchange rates, or start a
                      transfer in the app and pay in-store—all on the go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center2 inline-flex items-center justify-center w-83 h-83 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Send in person</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Transfer money in person from more than 57,000 Western
                      Union® U.S. agent locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button
              varient="primary"
              className="btnContact"
              type="submit"
              onClick={navigation}
            >
              Contact Us
            </button>
            <button
              varient="primary"
              className="btnContact"
              type="submit"
              onClick={() => {
                history("/ourteam");
              }}
            >
              About Us
            </button>
          </div>
          {/* <Contact /> */}
        </section>
      </section>
    </>
  );
};

export default Home;
