import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import config from '../../config';
export default function Header() {
  return (

    <div id="header">
        <StaticImage src='../assets/img/terra-logo.png'
                     alt="Terrarium NZ logo"
                     width={120}
                     height={120}
                    />
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </div>
  );
}
