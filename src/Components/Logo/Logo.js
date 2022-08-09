import React from "react";
import { Link } from "react-router-dom";
import LogoHeader from "../../assets/img others/logo2.PNG"

const Logo = () => {
    return (
        <div>
            <Link to={'/'} className="navbar-brand" href="#" >
                <img src={LogoHeader} alt="logo header" width="350"/>
            </Link>
        </div>
    )
}


export default Logo