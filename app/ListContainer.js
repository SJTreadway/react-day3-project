import React from 'react';
import AddItem from './AddItem';
import List from './List';

var ListContainer = React.createClass({
	getInitialState() {
		return {
			list: []
		};
	},

	handleAddItem(newItem) {
		this.setState({
			list: this.state.list.concat(newItem)
		})
	},

	handleRemoveItem(i) {
		var arrCopy = this.state.list.slice();
		arrCopy.splice(i, 1);
		this.setState({
			list: arrCopy
		})
	},

	render() {
		var styles = {
			container: {
			    border: "1px solid rgb(208, 208, 208)",
			    marginTop: 10,
			    marginBottom: 10,
			    borderRadius: 5
			},
			remove: {
			    top: 15,
			    color: "rgb(222, 79, 79)",
			    float: "left",
			    cursor: 'pointer'
			  }
		};
		return (
			<div style={styles.container} className="col-sm-6">
	        <div className="col-sm-12">
	        	<span className="glyphicon glyphicon-remove" style={styles.remove} onClick={this.props.remove}></span>
	        	<h3 className="text-center"> {this.props.title} </h3>
	        	<AddItem add={this.handleAddItem}/>
	        	<List items={this.state.list} remove={this.handleRemoveItem}/>
	        </div>
	      </div>
		)
	}
});

export default ListContainer;