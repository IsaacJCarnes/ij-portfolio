import "./About.css";

import {ProfilePic} from '../../assets/index';

const AboutMe = () =>{
    return(
        <div className="AboutContainer">
            <h3>About Me</h3>
            <div className='w-50 h-25 d-flex overflow-hidden justify-content-center align-items-center'><img width='50vw' alt='Isaac Joshua' src={ProfilePic}></img></div>
            <p className="text-center">Hi I'm Isaac Joshua, a fullstack developer from Pittsburgh, Pennsylvania. My interests include but are not limited to, 3D modeling, sound design and coding as it relates to art. My interest in technology started at a young age. I spent several summers in elementary school in several robotics camps, and in middle school joined my school's Lego robotics team. Although originally I had planned to become a robtic engineer, in 10th grade I started to learn and expirement with coding and quickly realized that was my true passion in life.</p>
        </div>
    )
}

export default AboutMe;