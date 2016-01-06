import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './ListContainer';
import AddList from './AddList';

var App = React.createClass({
	getInitialState() {
		return {
			lists: []
		}
	},

	addNewList(newList) {
		this.setState({
			lists: this.state.lists.concat({
				newTitle: newList.listName, 
				index: this.state.lists.length
			})
		});
	},

	handleRemoveList(index) {
		var newLists = this.state.lists;
		newLists.splice(index, 1);
		this.setState({
			lists: newLists
		})
	},

	render() {
		var componentList = this.state.lists.map((item, index) => {
			return <ListContainer title={item.newTitle} index={index} key={item.index} remove={this.handleRemoveList} />
		});

		return (
			<div className="container">
				<div className="row">
					<AddList add={this.addNewList} />
					{componentList}
				</div>
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));