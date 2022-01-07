import React from "react";
import "../assets/css/image.css"
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img className="online-img" key={image.id} src={image.webformatURL} width="500"  alt="" />;
  });
  return <div className="mt-2">{images}</div>;
};

export default ImageList;
