import "./About.css";

import {ProfilePic} from '../../assets/index';

const AboutMe = () =>{
    return(
        <div className="AboutContainer">
            <h3>About Me</h3>
            <br/>
            <p className="text-center">Hi I'm Isaac Joshua, a fullstack developer from Pittsburgh, Pennsylvania. I enjoy 3d modeling, sound design and coding as it relates to art. My interest in technology started at a young age where I spent several summers in robotics camps during elementary school and later joined the lego robotics team in my middle school. Although originally I had my sights set on becoming a robotic engineer, I started coding in 10th grade and quickly realized that was my true passion.</p>
            <div className='w-50 h-25 d-flex overflow-hidden justify-content-center align-items-center'><img width='150px' alt='Isaac Joshua' src={ProfilePic}></img></div>
        </div>
    )
}

export default AboutMe;