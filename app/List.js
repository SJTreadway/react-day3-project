import React from 'react';

var List = React.createClass({
	render() {
		var styles = {
		  uList: {
		    paddingLeft: 0,
		    listStyleType: "none"
		  },
		  listGroup: {
		    margin: '5px 0',
		    borderRadius: 5
		  },
		  removeItem: {
		    fontSize: 20,
		    float: "left",
		    position: "absolute",
		    top: 12,
		    left: 6,
		    cursor: "pointer",
		    color: "rgb(222, 79, 79)"
		  },
		  todoItem: {
		    paddingLeft: 20,
		    fontSize: 17
		  }
		};

		/*************************************************************************************
		=> is an Arrow Function. Binds 'this' to the outer scope. Used here instead of .bind()
		*************************************************************************************/

		var listItems = this.props.items.map((item, i) => {
			return (
				<li className="list-group-item" style={styles.listGroup} key={i}>
					<span className="glyphicon glyphicon-remove" style={styles.removeItem} onClick={this.props.remove.bind(null, i)}></span>
					<span style={styles.todoItem}>{item}</span>
				</li>
			)
		});

		return (
			<div>
				<ul style={styles.uList}>
					{listItems}
				</ul>
			</div>
		)
	}
});

export default List;