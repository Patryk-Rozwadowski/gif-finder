Search = React.createClass({
	getInitialState() {
		return {
			searchingText: ''
		};
	},

	handleChange: function (event) {
		let searchingText = event.target.value;
		this.setState ({searchingText: searchingText});

		if (searchingText.length > 2) {
			this.props.onSearch(searchingText);
		}
	},

	handleKeyUp: function(event) {
		if (event.keyCode === 13) {
			this.props.onSearch(this.state.searchingText);
		}
	},

	render() {
		return <input
					type='text'
					onChange={this.handleChange}
					onKeyUp={this.handleKeyUp}
					placeholder='Search'
					value={this.state.searchTerm}
				/>
	}
});
