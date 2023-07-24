import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Register and login to access all available doctors,manage appointments, and receive important notifications.
            Update your profile and apply to become a doctor. Our admin management system ensures a seamless experience, 
            where the admin controls doctor approvals and user removals.Contact us with any queries or book appointments 
            with your preferred doctors. Rest assured, Experience hassle-free healthcare management with us today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
