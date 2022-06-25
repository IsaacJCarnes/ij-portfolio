import '../css/Header.css';

import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

export default function Header() {
    const navigate= useNavigate();
    function handleClick(e) {
        e.preventDefault();
        navigate("/ij-portfolio/");
    }

    return(
        <div className="HeaderArea p-2 mt-2 rounded-top">
            <h1 className="HeaderName" onClick={(e) => handleClick(e)}>Isaac Joshua's Portfolio</h1>

            <Nav/>
        </div>
    )   
}