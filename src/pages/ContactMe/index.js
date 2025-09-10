import './Contact.css';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
    const [state, handleSubmit] = useForm("mknybvql");
    if (state.succeeded) {
        window.location.href = "/ij-portfolio/";
    }

    return (
        <section id="contact" className='ContactContainer sectionContainer'>
            <h1 id="contact-header" className='sectionHeader'>Contact Me</h1>
            <form onSubmit={handleSubmit} className='ContactForm'>
            
            <div>
            <label className="contact-label" htmlFor="email">Name:</label>
            <input id="name" type="name" name="name" required="required"/>
            <ValidationError prefix="Name" field="name"errors={state.errors}/><br/>
            </div>
    
            <div>
            <label className="contact-label" htmlFor="email">Email Address:</label>
            <input id="email" type="email" name="email" required="required"/>
            <ValidationError prefix="Email" field="email"errors={state.errors}/><br/>
            </div>

            <div>
            <label className="contact-label" htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" cols="100" required="required"/><br/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>

            <button className="styledButton" disabled={state.submitting}>Submit</button>
            </form>
            <p>Or email me directly at <a href="mailto:isaacjdeveloper@gmail.com">IsaacJDeveloper@gmail.com</a></p>
        </section>
      );
}