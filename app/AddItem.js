import React from 'react';

var AddItem = React.createClass({
	getInitialState() {
		return {
			newItem: ''
		};
	},
	handleChange(e) {
		this.setState({
			newItem: e.target.value,
		});
	},
	handleSubmit(e) {
		if (e.keyCode === 13) {
			this.props.add(e.target.value);
			e.target.value = '';
		}
	},
	render() {
		return (
			<div>
				<input onChange={this.handleChange} onKeyDown={this.handleSubmit} placeholder="new item" className="form-control" />
			</div>
		);
	}
});

export default AddItem;