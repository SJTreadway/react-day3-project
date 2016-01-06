import React from 'react';

var AddList = React.createClass({
	getInitialState() {
		return {
			listName: ''	
		}
	},

	handleChange(e) {
		this.setState({
			listName: e.target.value
		})
	},

	handleSubmit(e) {
		e.preventDefault();
		this.props.add(this.state);
		this.setState({
			listName: ''
		});
	},

	render() {
		return (
			<form className="col-sm-6" onSubmit={this.handleSubmit}>
				<h3 className="text-center">Create New List</h3>
				<p>List Name:</p><input className="form-control" value={this.state.listName} placeholder="List Name" onChange={this.handleChange} />
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}

});

export default AddList;