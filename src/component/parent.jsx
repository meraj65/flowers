import React, { Component } from "react";
import Images from "./Images";
// import AboutImg from "./About";
// import { Link } from "react-router-dom";

// import Search from "./Search";
// import PropTypes from 'prop-types'
class Cls extends Component {
 



  // state = {
  //   content: "hello world",
  //   headCnt: "practice",
  // };

  // btn1 = (p) => {
  //   this.setState({
  //     headCnt: p,
  //   });
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = { images: [] };
  //   this.onSearchSubmit = this.onSearchSubmit.bind(this);
  // }
  // async onSearchSubmit(entry) {
  //   const response = await axios.get(
  //     `https://pixabay.com/api/?key=24210346-368a27c0fd0b80b0f1fee368a&q=${entry}&image_type=photo`
  //   );
  //   console.log(response.data.hits);
  //   this.setState({ images: response.data.hits });
  // }

  render() {
    return (
      <div>
         
        {/* <h1> {this.state.headCnt}</h1>
        <p className="mb-0">{this.state.content}</p>
        <button className="btn btn-info m-1" onClick={() => this.btn1("hey")}>
          btn1
        </button>
        <button
          className="btn btn-info m-1"
          onClick={() => this.btn1("how are you")}
        >
          btn2
        </button>
        <br /> */}

        {/* <Link to="/About">
          <button>About</button>
        </Link> */}
        {/* <Search onSearchSubmit={this.onSearchSubmit} /> */}
        <Images />
      </div>
    );
  }
}

export default Cls;
