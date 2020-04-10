import React from "react"

class ImageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map((image) => (
          <img src={image.urls.regular} alt={image.description} key={image.id} />
        ))}
      </div>
    )
  }
}

export default ImageList
