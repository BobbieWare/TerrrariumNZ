import React, { useState } from 'react';

import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout';
import Header from "../Header";
import { GatsbyImage } from "gatsby-plugin-image";

const Terrarium = ({ data }) => {
  const terrarium = data.contentfulTerrarium
  const [imageIndex, setImageIndex] = useState(0);
  const activeImage = terrarium.photos[imageIndex];

  console.log(terrarium.photos)

  const onImageClick = () => {
    setImageIndex((imageIndex + 1) % terrarium.photos.length);
  }

  return (
    <Layout>
      <Header />
      <hr />
      <div id="terrarium-page">
        <div className="terrarium-container">
          <div className="terrarium-image" onClick={onImageClick}>
            <GatsbyImage image={activeImage.gatsbyImageData}
              alt={terrarium.terraNumber} />
            <p>{activeImage.description}</p>
          </div>
          <div className="terrarium-data">

            <div className="terrarium-header">
              <h2>Terrarium #{terrarium.terraNumber}
              </h2>
            </div>
            <h3 className='price'>${terrarium.salePrice}</h3>
            {terrarium.soldDate ?
              <h3 className='sold'>- SOLD -</h3> : <> </>
            }
            <div className="label">Plants:
            </div>
            <div className='description'>{terrarium.plants.plants}
            </div>
            <div className="label">Materials:
            </div>
            <div className='description'>{terrarium.materials.materials}
            </div>
            <div className="label">Microfauna:
            </div>
            <div className='description'>{terrarium.knownMicrofauna.knownMicrofauna}
            </div>
            <span className='created-date'> (Created: {terrarium.createdDate})</span>
          </div>
        </div>
        <Link to={`/Gallery`}>Gallery</Link>
      </div>



    </Layout >
  )
}

export const terrariumQuery = graphql`
  query TerrariumById($id: String!) {
    contentfulTerrarium(id: { eq: $id }) {
      id
      terraNumber
      plants {
        plants
      }
      materials {
        materials
      }
      knownMicrofauna {
        knownMicrofauna
      }
      cost
      salePrice
      actualSalePrice
      createdDate (formatString: "Do MMMM YYYY")
      soldDate
      photos {
        gatsbyImageData (
          width: 750
          placeholder: BLURRED
        )
        description
      }
    }
  }
`

export default Terrarium;
