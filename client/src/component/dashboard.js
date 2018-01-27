import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action.js';
import CatForm from './catForm.js';
import CatList from './catList.js';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="dashboard">
        <CatForm addCategory={this.props.todoCreate} cats={this.props.categories}/>
        <CatList update={this.props.todoUpdate} deleteHandler={this.props.todoDelete} cats={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state || [],
});

const mapDispatchToProps = (dispatch, getState) => ({
  todoCreate: category => dispatch(actions.todoCreate(category)),
  todoUpdate: category => dispatch(actions.todoUpdate(category)),
  todoDelete: category => dispatch(actions.todoDelete(category)),
  todoInitialize: () => dispatch(actions.todoInitialize()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
