const GIPHY_LOADING_URL =	'https://www.ifmo.ru/images/loader.gif';
const styles = {
	minHeight: '310px',
	margin: '0.5em'
};

Gif = React.createClass({
	getUrl: function() {
		return this.props.sourceUrl || GIPHY_LOADING_URL;
	},
	render: function() {
		let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

		return (
			<div>
				<a href={this.getUrl()} title='view this on giphy' className='searcher--element' target='new'>
					<img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
				</a>
			</div>
		);
	}
});
