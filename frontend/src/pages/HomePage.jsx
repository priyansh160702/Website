import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import pet1 from "../assets/pet1.png";
import ellipse1 from "../assets/Ellipse 1.png";
import ellipse2 from "../assets/Ellipse2.png";

const HomePage = () => {
  return (
    <Fragment>
      <section className="container flex items-center h-[60vh] relative z-10">
        <div className="w-1/2">
          <h1 className="text-[5rem] font-medium">COMING SOON!</h1>
          <p className="text-xl font-medium">
            Delighting pet owners with stylish and comfortable accessories for
            their furry friends.
          </p>
          <button className="btn w-[300px] py-5  rounded-full text-xl mt-8 ml-[10rem] shadow-md shadow-gray-600">
            Get Notified
          </button>
        </div>

        <div className="w-1/2">
          <img
            src={pet1}
            alt=""
            className="w-[30rem] absolute -top-[3.5rem] right-0"
          />
        </div>
      </section>
      <p className="flex items-center gap-2 absolute left-[5%] bottom-[4%] font-semibold z-10">
        <FontAwesomeIcon icon={faEnvelope} />
        ploofypaws@gmail.com
      </p>

      <img src={ellipse1} alt="" className="absolute -top-[5rem] right-0" />
      <img src={ellipse2} alt="" className="absolute top-[18.7rem] w-[24rem]" />
    </Fragment>
  );
};

export default HomePage;
