import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import  ImageGalleryItem  from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { images, onImgClick } = this.props;
    return (
      <ul className={s.list} onClick={this.handleOpenModal}>
        {images &&
          images.map((image) => (
            <ImageGalleryItem
               key={image.id} image={image} onCLick={onImgClick} />
         ))}
      </ul>
    );
  }
}

export default ImageGallery;