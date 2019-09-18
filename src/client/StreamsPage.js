/* global React */

export default class StreamsPage extends React.PureComponent {
    componentDidMount() {
        new Twitch.Embed('twitch-embed', {
            width: '100%',
            height: '480',
            channel: 'chrisstreamingcode'
        });
    }

    render() {
        return <div className="StreamsPage">
            <div id="twitch-embed" />
            <p>
                Or check <a href="https://www.twitch.tv/chrisstreamingcode">
                Chris Streaming Code out on Twitch</a>!
            </p>
        </div>;
    }
}