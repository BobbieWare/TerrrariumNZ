import React, { useState } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const GalleryTerrarium = ({ node }) => {
    const terrarium = node;
    const [imageIndex, setImageIndex] = useState(0);
    const activeImage = terrarium.photos[imageIndex];

    const onImageClick = () => {
        setImageIndex((imageIndex + 1) % terrarium.photos.length);
    }

    return (
        <div className="gallery-terrarium" key={terrarium.id}>
            <Link to={`/terrarium/${terrarium.terraNumber}`}>
                <GatsbyImage image={activeImage.gatsbyImageData}
                    alt={terrarium.terraNumber} 
                    className='image'/>
                <div className='data-container'>
                    <div className='title'>
                        #{terrarium.terraNumber}
                    </div>
                    <div className='data'>
                        ${terrarium.salePrice}
                    </div>
                </div>

            </Link>

        </div>
    )
}

export default GalleryTerrarium;
