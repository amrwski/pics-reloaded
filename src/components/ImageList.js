import React from "react"
import "./ImageList.css"

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image) => (
          <img src={image.urls.regular} alt={image.description} key={image.id} />
        ))}
      </div>
    )
  }
}

export default ImageList
