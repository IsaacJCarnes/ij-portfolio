import '../css/Header.css';

import Nav from "./Nav";

export default function Header() {
    return(
        <div className="HeaderArea p-2 mt-2 rounded-top">
            <h1 className="HeaderName">Isaac Joshua's Portfolio</h1>

            <Nav/>
        </div>
    )   
}