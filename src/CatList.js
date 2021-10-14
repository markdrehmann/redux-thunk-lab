import React from 'react';

class CatList extends React.Component {
  render() {
    return(
      <div>
        {this.props.catPics.map(catPic => 
            <img key={catPic.id} src={catPic.url} />
          )}
      </div>
    )
  }
}

export default CatList