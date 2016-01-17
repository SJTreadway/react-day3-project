import React from 'react';
import AddItem from './AddItem';
import List from './List';
import Firebase from 'firebase';

const ListContainer = React.createClass({
	getInitialState() {
		return {
			list: []
		};
	},

	componentDidMount() {
		this.firebaseRef = new Firebase('https://sjt-todo.firebaseio.com');
		this.firebaseRef.on('child_added', (snapshot) => {
			this.setState({
				list: this.state.list.concat({
					key: snapshot.key(),
					val: snapshot.val()
				})
			})
		});
		this.firebaseRef.on('child_removed', (snapshot) => {
			const key = snapshot.key();
			const newList = this.state.list.filter((item) => {
				return item.key !== key;
			})
			this.setState({
				list: newList
			});
		});
	},

	handleAddItem(newItem) {
		this.firebaseRef.push(newItem)
	},

	handleRemoveItem(i) {
		const item = this.state.list[i];
		this.firebaseRef.child(item.key).remove();
	},

	render() {
		const styles = {
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
	        	<List items={this.state.list.map((item) => {return item.val})} remove={this.handleRemoveItem}/>
	        </div>
	      </div>
		)
	}
});

export default ListContainer;