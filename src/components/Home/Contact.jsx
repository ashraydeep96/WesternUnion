import styled from "@emotion/styled";
import React from "react";
import "./Contact.css";

const Contact = () => {
  const Wrapper = styled.section``;
  return (
    <Wrapper>
      <h2 className="common-heading mb-3 mt-3">Feel free to contact us</h2>
      <div className="cont">
        <div className="card bg-grey">
          <div className="contact-form mt-4">
            <form
              action="https://formspree.io/f/xzblokva"
              method="Post"
              className="contact-inputs"
            >
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                className="form-control"
                name="message"
                id=""
                placeholder="Type Your Message"
                cols="35"
                rows="6"
                autoComplete="off"
                required
              ></textarea>
              <input type="submit" value="send" className="btnContact" />
            </form>
          </div>
        </div>
        <img
          src="https://vunetsystems.com/wp-content/uploads/2022/06/Contact-Us-animation.gif
"
          className="img"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Contact;
