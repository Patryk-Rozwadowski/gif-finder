class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      searchingText: '',
      gif: {}
    }
  }
    render() {
        const styles = {
          margin: '0 auto',
          textAlign: 'center',
          width: '90%'
        };
        return (
        <div style={styles}>
              <h1>Wyszukiwarka GIFow!</h1>
              <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
              <Search />
              <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
              />
        </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
