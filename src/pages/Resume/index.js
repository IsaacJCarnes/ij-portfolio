import "./Resume.css";
import Pdf from "../../assets/IsaacCarnes_Resume.pdf";
import FabricBackground from "../../components/FabricBackground";

export default function Resume() {
  return (
    <section id="Resume"className="section-area">
      <div className="fabric-container section-title">
        <FabricBackground bgClass="bg-orange initial" borderClass="" shadedMargin={3}/>
        <h3 className="perfectOutline" data-text="Resume">Resume</h3>
      </div>
      <div id="PdfHolder" className="fabric-container">
        <FabricBackground borderClass="hidden" shadedMargin={3}/>
        <object
          className="d-flex justify-content-center flex-column"
          data={Pdf}
          type="application/pdf"
        >
          <p className="ResumeText EasyText text-center">
            External link to{" "}
            <a className="EasyText" href={Pdf}>
              the PDF
            </a>
          </p>
        </object>
      </div>
    </section>
  );
}
