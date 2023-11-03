import styled from "@emotion/styled";
import React from "react";
import "./Contact.css";

const Contact = () => {
  const Wrapper = styled.section``;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact us</h2>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xzblokva" method="Post" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id=""
              placeholder="Type Your Message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" className="btnContact" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
