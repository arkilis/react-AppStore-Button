import React from "react"

const MyComponent = props => {

    const imgUrl = "http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg";
    const aStyle = {
      display: 'inline-block',
      overflow: 'hidden',
      background: 'url(' + imgUrl + ') no-repeat',
      width: this.props.width || 165,
      height:  this.props.height || 40,
    };
    
    return
      <div>
        <a
          style = {aStyle}
          href  = {this.props.url}
          >
        </a>
      </div>
}


export default AppStoreButton
