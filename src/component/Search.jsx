import React from 'react';
import "../assets/css/search.css"
class SearchOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = { entry: "" };
      }
      onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
      };
    
      render() {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={this.onFormSubmit} >
              <div >
                <div >
                  <input
                  className="form-input input-s"
                    type="text"
                    placeholder="search anythings.."
                    onChange={(event) =>
                      this.setState({ entry:event.target.value })
                    }
                    value={this.state.entry}
                  />
                  {/* <i className="search icon"></i> */}
                </div>
              </div>
            </form>
          </div>
        );
      }
}
 
export default SearchOnline;


