import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout>
      <div className=" contactus ">
      
        <div className="col-md-4">
          <h3 className="p-2 text-dark ">CONTACT US</h3>
          {/* <p className="te mt-2">
            connect with me
          </p> */}
          <p>
          <FaGithub /> <Link to="https://github.com/karanubale/ShopCart"> Github</Link>
          </p>
          <p>
          <FaLinkedin /><Link to="https://www.linkedin.com/in/karan-ubale-580702243/"> Linkldin</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;