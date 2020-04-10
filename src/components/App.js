import React from "react"
import SearchBox from "./SearchBox"
import ImageList from "./ImageList"

class App extends React.Component {
  handleSubmit = (event, term) => {
    console.log(term)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <SearchBox handleSubmit={this.handleSubmit} />
        <ImageList />
      </div>
    )
  }
}

export default App
