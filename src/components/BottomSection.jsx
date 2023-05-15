import "./bottomSection.scss";
import React from "react";
import { Footer } from "./Footer";
import SendIcon from "@mui/icons-material/Send";

export const BottomSection = () => {
  return (
    <div className="bottom_section">
      <div className="main">
        <div className="subscription_section">
          <h1>Subscribe to our newsletter</h1>
          <form>
            <div className="emailAndButton">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">
                <SendIcon />
              </button>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="agreeWithTerms" />
              <label htmlFor="agreeWithTerms">
                I have read and accept the terms of service
              </label>
            </div>
          </form>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};
