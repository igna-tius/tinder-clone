import React from "react";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <BackIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
