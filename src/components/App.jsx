import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';

import fetchImages from '../services/api';


class App extends Component {
  state = {
    modalContent: "",
    searchQuery: "",
    page: 1,
    visibleImages: [],
    isLoading: false,
    openModal: false,
  };


  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChange}/>
      </>
    );
  }
}

export default App;