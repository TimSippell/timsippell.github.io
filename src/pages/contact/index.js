import React from "react";
import { contactConfig } from "../../content_option";
import { Link } from "react-router-dom";

export const ButtonMailTo = () => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:" + contactConfig.YOUR_EMAIL;
                e.preventDefault();
            }}
        >
            <div id="button_p" className="ac_btn btn ">
                Contact Me
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
            </div>
        </Link>
    );
};