import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
import "../assets/css/image.css";
class Images extends Component {
  state = {
    imgOfarr: [
      {
        id: 1,
        imgSrc:
          "https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_960_720.jpg",
        imgH: "200",
        imgW: "300",
        category: "Nature",
      },

      {
        id: 2,
        imgSrc:
          "https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_960_720.jpg",
        imgH: "200",
        imgW: "300",
        category: "Animal",
      },
      {
        id: 3,
        imgSrc:
          "https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915_960_720.jpg",
        imgH: "200",
        imgW: "300",
        category: "Buildings",
      },
      {
        id: 4,
        imgSrc: "https://picsum.photos/200/300 ",
        imgH: "200",
        imgW: "300",
        category: "Random",
      },
    ],
    categoryOfList: [
      { id: 10, category: "Nature" },
      { id: 20, category: "Animal" },
      { id: 30, category: "Buildings" },
      { id: 40, category: "Random" },
    ],
    currentCategory: "",
  };

  // componentDidMount() {
  //   const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(promise);
  // }

  // async componentDidMount() {
  //   const { data: posts } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   this.setState({ posts });
  // }

  render() {
    let arrOfFiltrdImg = [];
    //  = this.state.imgOfarr.filter((x) => {
    //   return x.category === this.state.currentCategory;
    // });
    if (this.state.currentCategory === "") {
      arrOfFiltrdImg = [...this.state.imgOfarr];
    } else {
      arrOfFiltrdImg = this.state.imgOfarr.filter((x) => {
        return x.category === this.state.currentCategory;
      });
    }

    const filterTableData = (pg) => {
      this.setState({ currentCategory: pg });
    };

    return (
      <div className=" main-center">
        <div className="list-div text-center">
          <h1 className="">Category</h1>
          <ul className="list-group ">
            {this.state.categoryOfList.map((c) => (
              <li
                key={c.id}
                onClick={() => filterTableData(c.category)}
                className={
                  this.state.currentCategory === c.category
                    ? "list-group-item active"
                    : "list-group-item list-group-item-dark"
                }
              >
                {c.category}
              </li>
            ))}
          </ul>
        </div>
        <div className="col p-0">
          {/* <p className="text-center bg-danger mb-0 p-2">
            Showing {this.state.imgOfarr.length} Movies in Table.
          </p> */}
          <table className="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">Category</th>
                <th scope="col">Images</th>
                <th scope="col">Change Image</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {arrOfFiltrdImg.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.category}</td>
                  <td>
                    {
                      <img
                        className="m-2"
                        key={i.id}
                        src={i.imgSrc}
                        alt="myImg"
                        height={i.imgH}
                        width={i.imgW}
                      />
                    }
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-dark m-2"
                      onClick={() => this.chngImg(i.id)}
                    >
                      Change Image
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => this.dltImg(i)}
                    >
                      DeletImage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 
        {this.state.imgOfarr.map((i) => {
          return (
            <React.Fragment>
              <img
                className="m-2"
                key={i.id}
                src={i.imgSrc}
                alt="myImg"
                height={i.imgH}
                width={i.imgW}
              />
              <br />
              <button className="btn btn-danger" onClick={() => this.dltImg(i)}>
                DeletImage
              </button>
              <button
                className="btn btn-dark m-2"
                onClick={() => this.chngImg(i.id)}
              >
                Change Image
              </button>
              <br />
            </React.Fragment>
          );
        })}
        <br />
        <button className="btn btn-danger m-2" onClick={() => this.lstImgDlt()}>
          lastImgDlt
        </button>
        <button
          className="btn btn-outline-secondary m-2"
          onClick={() => this.addBtn()}
        >
          pushArrOfImg
        </button> */}
      </div>
    );
  }

  chngImg = (imgId) => {
    const chngSrc = this.state.imgOfarr.map((imgOfChngArr) => {
      if (imgOfChngArr.id === imgId)
        imgOfChngArr.imgSrc =
          "https://wqmx.com/media/k2/items/cache/7c5969ed5283be8d3c301644535f9099_L.jpg";
      return imgOfChngArr;
    });
    this.setState({ imgOfarr: chngSrc });
    console.log(chngSrc);
  };

  addBtn = () => {
    const pushArr = [...this.state.imgOfarr];
    pushArr.push({
      id: 5,
      imgSrc: "https://picsum.photos/seed/picsum/200/300",
      imgH: "200",
      imgW: "200",
    });
    console.log("pushh", pushArr);
    this.setState({ imgOfarr: pushArr });
  };

  lstImgDlt = () => {
    const popArrOfImg = [...this.state.imgOfarr];
    popArrOfImg.pop();
    this.setState({ imgOfarr: popArrOfImg });
  };

  dltImg = (pImg) => {
    const imgDltArr = this.state.imgOfarr.filter((d) => d.id !== pImg.id);
    console.log("dlt 1-1", imgDltArr);
    this.setState({ imgOfarr: imgDltArr });
  };
}

export default Images;
