import React from 'react';

class CatItem extends React.Component {
  constructor(props){
    super(props);

    this.editToggle = this.editToggle.bind(this);
    this.state = {
      isEditing: false,
    };
  }

  editToggle(){
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    return(
      <div>
        <button onClick={() => this.props.deleteHandler(this.props.catID)} type="submit"> delete </button>
      </div>
    );
  }
}

export default CatItem;
