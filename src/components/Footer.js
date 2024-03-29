import '../css/Footer.css';

import githubIcon from '../assets/icon-github-black.png';
import linkedinIcon from'../assets/icon-linkedin-black.png';

export default function Footer(){
    const openGithub = (e) => { //Opens my github
        e.preventDefault();
        window.open('https://github.com/IsaacJCarnes');
    };

    const openLinkedin = (e) => { //Opens my linkedIn
        e.preventDefault();
        window.open('https://www.linkedin.com/in/isaac-j-carnes/');
    };

    return(
        <div className="FooterContainer d-flex justify-content-around align-items-center mb-2 p-1 rounded-bottom">
            <button className="" type="button" onClick={(e) => {openGithub(e)}}><img src={githubIcon} alt='github' width="30px" height="30px"></img></button>
            <button type="button" onClick={(e) => {openLinkedin(e)}}><img src={linkedinIcon} alt='linkedIn' width="30px" height="30px"></img></button>
        </div>
    )
}