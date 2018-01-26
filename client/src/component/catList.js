import React from 'react';

import CatItem from './catItem.js';

class CatList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log('catsss', this.props.cats);
    return(
      <div>
        <ul>
          {
            this.props.cats.map((category,i) =>
              <li key={category.id} category={category}>
              {console.log('yooo', category.task, category.description)}
                <h2> {category.task} </h2>
                <h2> {category.description} </h2>
                <CatItem delete={this.props.delete} catID={category.categoryID}/>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default CatList;
