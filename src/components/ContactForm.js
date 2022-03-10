import React from 'react';

export default function ContactForm() {

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
  }

  return (
    <form method="POST" action="/" name="enquiry" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="Terra Enquiry" />
      <input type="hidden" name="bot-field" />
      <div className="row">
        {/* <div className="col-6 col-12-mobilep">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="col-6 col-12-mobilep">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="col-12">
          <select type="email" name="terra" placeholder="Select a Terra" >
            <option>Terra</option>
            <option>Big Terra</option>
            <option>Terra Mini</option>
          </select>
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message" rows="6" ></textarea>
        </div>
        <div className="col-12">
          <div data-netlify-recaptcha="true"></div>
        </div> */}
        <div className="col-12">
          <ul className="actions special">
            <li>
              {/* <input type="submit" value="Send Message" onSubmit={handleSubmit} /> */}
              <a class="mailto" href="mailto:terrarium.nz@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
