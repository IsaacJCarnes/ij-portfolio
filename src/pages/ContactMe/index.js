import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import FabricBackground from "../../components/FabricBackground";

export default function Contact() {
  const [state, handleSubmit] = useForm("mknybvql");
  if (state.succeeded) {
    window.location.href = "/ij-portfolio/";
  }

  return (
    <section id="Contact" className="ContactContainer sectionContainer">
      <div className="fabric-container section-title">
        <FabricBackground bgClass="bg-orange initial" />
        <h1 id="contact-header" className="sectionHeader perfectOutline" data-text="Contact Me">
          Contact Me
        </h1>
      </div>
      <div id="FormContainer" className="fabric-container">
        <FabricBackground />
        <form onSubmit={handleSubmit} className="ContactForm">
          <div>
            <label className="contact-label perfectOutline" htmlFor="email" data-text="Name:">
              Name:
            </label>
            <input id="name" type="name" name="name" required="required" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <br />
          </div>

          <div>
            <label className="contact-label perfectOutline" htmlFor="email" data-text="Email Address:">
              Email Address:
            </label>
            <input id="email" type="email" name="email" required="required" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <br />
          </div>

          <div>
            <label className="contact-label perfectOutline" htmlFor="message" data-text="Message:">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="100"
              required="required"
            />
            <br />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="styledButton fabric-container" disabled={state.submitting}>
            <FabricBackground bgClass="bg-green" borderClass="hidden"/>
            <span className="perfectOutline" data-text="Submit">Submit</span>
          </button>
        </form>
        <aside id="ContactNote">
          <div id="NoteShadow"/>
          <p>
            Or email me <br/>directly at<br/>
            <a href="mailto:isaacjdeveloper@gmail.com">
              IsaacJDeveloper<br/>@gmail.com
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
