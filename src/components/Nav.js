import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Nav(){
    const basePath = "ij-portfolio/";
    function navbarItem(name, contentLink){  //Name and link for state variable
        this.name = name;
        this.contentLink = contentLink;
    };

    const navItems = [ //Items and their value
     new navbarItem("About Me", basePath),
     new navbarItem("Portfolio", basePath + "portfolio"),
     new navbarItem("Contact Me", basePath + "contactMe"), 
     new navbarItem("Resume", basePath + "resume")
    ];

    let location = useLocation().pathname;
    if(location === "/ij-portfolio"){ //Makes nav bar blue when url opens to /ij-portfolio
        location = "/ij-portfolio/";
    }
    console.log(location);

    //Creates h4 elements out of navItems that depend on nav state for their text color
    const navList = navItems.map((item, i) => <Link to={'/' + item.contentLink} className={location === ("/" + item.contentLink) ? "TextSelected" : "TextNormal"} key={i}>{item.name}</Link>);

    return (
        <div className="NavBar">
            {navList}
        </div>
    )
}