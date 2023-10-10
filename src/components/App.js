import axios from "axios";
import SearchInput from "./SearchInput";
import React from "react";
import ImageList from "./ImageList";
class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }


async onSearchSubmit(entry){
   
  const response = await axios.get(`https://pixabay.com/api/?key=39933193-87a5e55cf4e6a1446baacdb65&q=${entry}&image_type=photo`)
  console.log(response.data.hits)
  this.setState({images: response.data.hits})
}

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        ths number of image are {this.state.images.length}
        <ImageList i ={this.state.images}/>
      </div>
    );
  }
}

export default App;
