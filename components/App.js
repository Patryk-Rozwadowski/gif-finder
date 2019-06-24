const GIPHY_API_URL = 'https://api.giphy.com';
const GIPHY_PUB_KEY = 'TgTTdNPBINaTR3H90MOu25AP372HjQRw';

App = React. createClass ({
	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},

	handleSearch: function (searchingText) {
		this.setState({
			loading: true
		});
		this.getGif(searchingText, gif => {
			this.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			});
		});
	},

	getGif: function(searchingText, callback) {
		let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
    	xhr.onload = () => {
        	if (xhr.status === 200) {
           		let data = JSON.parse(xhr.responseText).data;
				let gif = {
					url: data.fixed_width_downsampled_url,
                	sourceUrl: data.url
				};
				callback(gif);
			}
		};
		xhr.send();
	},

	render: function () {
		const styles = {
			margin: '0 auto',
			textAlign: 'center',
			widht: '90%'
		};
		return (
			<div style={styles}>
				<h1>Gif Engine!</h1>
				<p>Find Gif on <a href='http://giphy.com'> giphy </a> .Press enter to get more gifs.</p>
				<Search onSearch={this.handleSearch}/>
				<Gif
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
});

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
