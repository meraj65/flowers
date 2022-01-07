import React, { Component } from 'react'
import axios from "axios";
import ImageList from "./ImageList";
import Search from "./Search";
import "../assets/css/search.css"

export default class SerachParent extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
      }
      async onSearchSubmit(entry) {
        const response = await axios.get(
          `https://pixabay.com/api/?key=24210346-368a27c0fd0b80b0f1fee368a&q=${entry}&image_type=photo`
        );
        console.log(response.data.hits);
        this.setState({ images: response.data.hits });
      }
    render() {
        return (
            <div className="">
                 <div className="">
          <Search onSearchSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
         
        </div>
            </div>
        )
    }
}

