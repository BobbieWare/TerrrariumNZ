import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Like What You See?</h2>
        </header>

        <p>Flick us an email and we'll get you on track to own your one-of-a-kind Terra!</p>

        <p>terrarium.nz@gmail.com</p>

        <ContactForm />

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>Terrarium NZ by Ware & Ware</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
