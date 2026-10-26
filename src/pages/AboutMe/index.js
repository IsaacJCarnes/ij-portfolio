import "./About.css";
import FabricBackground from "../../components/FabricBackground.js";

const AboutMe = () => {
  const textContent = `Hi, I'm Isaac Carnes, a software engineer based in Pittsburgh, Pennsylvania, with over two and a half years of professional experience building software solutions. My passion for technology began early, from robotics camps in elementary school to competing on my middle school's Lego robotics team. While I initially set out to become a robotics engineer, I discovered my true calling in software development during high school when I began experimenting with code. Today, I bring that same curiosity and dedication to my work as a professional software engineer. Outside of my day-to-day responsibilities, I explore the intersection of technology and creativity through 3D modeling, sound design, and creative coding. I'm driven by a lifelong commitment to learning and pushing the boundaries of what's possible with technology.`;
  return (
    <section id="AboutContainer" className="section-area">
      <div className="fabric-container section-title" id="About">
        <h3 className="perfectOutline" data-text="About Me">About Me</h3>
        <FabricBackground bgClass="bg-orange initial" borderClass="" shadedMargin={3}/>
      </div>
      <div className="fabric-container">
        <FabricBackground bgClass="bg-green" borderClass="hidden" shadedMargin={3} shadeAmount={0.6}/>
          <p className="text-center">{textContent}</p>
      </div>
    </section>
  );
};

export default AboutMe;
