import "./Resume.css";
import Pdf from "../../assets/IsaacCarnes_Resume.pdf";
import FabricBackground from "../../components/FabricBackground";

export default function Resume() {
  return (
    <section id="Resume">
      <div className="fabric-container section-title">
        <FabricBackground bgClass="bg-orange initial"/>
        <h1 className="sectionHeader perfectOutline" data-text="Resume">Resume</h1>
      </div>
      <div id="PdfHolder" className="fabric-container">
        <FabricBackground />
        <object
          className="d-flex justify-content-center flex-column"
          data={Pdf}
          type="application/pdf"
          width="100%"
          height="100%"
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
