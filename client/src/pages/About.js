import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">

        <div className="col-md-4">
          <h3 className="mt-3">About ShopCart</h3>
          <p className="text-justify mt-2">
            Welcome to ShopCart, your one-stop online destination for all your shopping needs! At ShopCart, we strive to provide a seamless and enjoyable shopping experience by offering a wide range of products at competitive prices. Whether you're looking for the latest electronics, trendy fashion, home essentials, or unique gifts, we've got you covered.
          </p>
          <p className="text-justify mt-2">
            Our user-friendly interface, secure payment options, and fast delivery services ensure that your shopping experience is as convenient as possible. We are committed to customer satisfaction, offering top-notch customer support and easy returns to make sure you’re always happy with your purchase.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;