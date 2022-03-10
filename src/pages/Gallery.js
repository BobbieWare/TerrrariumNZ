import React, { useState } from 'react';

import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Header from "../components/Header";
import GalleryTerrarium from '../components/GalleryTerrarium';

const Gallery = ({ data }) => {

  const terrariums = data.allContentfulTerrarium.edges;

  return (
    <Layout>
      <Header />
      <hr />
      <h2>All Terra's</h2>
      <div className="gallery">
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        {terrariums.map(GalleryTerrarium)}
        Please note this is on purpose to fill out the screen while we don't have a lot of terrariums
      </div>
    </Layout >
  )
}

export const terrariumQuery = graphql`
query GalleryTerrariums {
  allContentfulTerrarium {
    edges {
      node {
        id
        terraNumber
        salePrice
        photos {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  }
}
`

export default Gallery;
