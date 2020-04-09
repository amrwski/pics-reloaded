import React from "react"

class SearchBox extends React.Component {
  state = { term: "" }

  handleChange = (event) => {
    this.setState({ term: event.target.value })
  }

  handleSubmit = (event) => {
    console.log(this.state.term)
    event.preventDefault()
  }

  render() {
    return (
      <div className="ui segment" style={{ margin: "20px 100px 20px 100px" }}>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-input">Search images</label>
            <input
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              id="search-input"
              placeholder="What would you like to see?"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBox
