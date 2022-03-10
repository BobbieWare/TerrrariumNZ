import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          Self-Sustaining
          <br />
           Sealed Ecosystem
        </h2>
      </header>

      <Link
      to={`/Gallery`}>
        Gallery
      </Link>

      <div className="box alt container">
        <section className="feature left">
          <a className="image">
            <StaticImage src='../assets/images/terra-inside.jpg' alt="" objectFit="contain" objectPosition='50% 50%' />
          </a>
          <div className="content">
            <h3>Terrariums</h3>
            <p>
              Sealing a terrarium creates a humid environment for plants,
              moss, and microfauna to thrive within a mini-ecosystem inside
              your home. It also means that the only water necessary for the
              plants to grow is already trapped inside the jar so you will
              never have to water your terrarium.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a className="image">
            <StaticImage src='../assets/images/terra_staple.jpg' alt="" objectFit="contain" objectPosition='50% 50%' />
          </a>
          <div className="content">
            <h3>How does it survive?</h3>
            <p>
              Microfauna such as springtails digest decomposing organic
              matter, including mould and fungus, then recycle it into
              nutrients for the plants, creating carbon dioxide in the
              process. This gives the plants all the nutrients they neexsd to
              survive and allows beneficial bacteria and fungi to develop over
              time.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a className="image">
            <StaticImage src='../assets/images/big_terra_thechad.jpg' alt="" objectFit="contain" objectPosition='50% 50%' />
          </a>
          <div className="content">
            <h3>What do I have to do?</h3>
            <p>
              Absolutely nothing. Just put your terrarium in a place that
              receives bright indirect light and watch as the ecosystem grows
              and evolves over time.
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
