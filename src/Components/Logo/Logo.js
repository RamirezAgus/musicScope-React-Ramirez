import React from "react";
import LogoHeader from "../../assets/img others/logo2.PNG"
import "./Logo.css"

const Logo = () => {
    return (
        <div>
            <a className="navbar-brand" href="#" >
                <img src={LogoHeader} alt="logo header" width="350"/>
            </a>
        </div>
    )
}


export default Logo