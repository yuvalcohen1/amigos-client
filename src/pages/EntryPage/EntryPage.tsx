import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./EntryPage.css";

type Props = {};

const EntryPage = (props: Props) => {
  return (
    <div className="entry-page">
      <Navbar />
      <main>
        <div className="register-section">
          <div className="register-headers">
            <h1>Register</h1>
            <h2>It's free, and always will be.</h2>
          </div>
          <RegisterForm />
        </div>
        <div className="register-side-section">
          <h1>
            Amigos helps you connect and share with the people in your life.
          </h1>
          <div className="register-background-img-container">
            <img
              src="https://fm4v3.orf.at/v2static/storyimages/site/fm4/20100624/facebook_eyes_body.jpg"
              alt="people-connection"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EntryPage;
