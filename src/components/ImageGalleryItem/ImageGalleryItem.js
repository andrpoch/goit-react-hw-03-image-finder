import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';


export default function ImageGalleryItem({ image, onClick }) {
   const { webformatUrl, tags } = image;
   return (
      <li className={s.item} onClick={onClick}>
         <img
            className={s.img}
            src={webformatUrl}
            alt={tags} />
      </li>
   );
};
  ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};