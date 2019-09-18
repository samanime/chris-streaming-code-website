/* global React */
import SocialPanel from './SocialPanel';

export default class SocialPage extends React.PureComponent {
    render() {
        return <div className="SocialPage">
            <div className="row">
                <div className="col">
                    <h1>Chris Streaming Code on:</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SocialPanel
                        url="https://www.twitch.tv/chrisstreamingcode"
                        title="Twitch"
                        imageSource="/public/images/twitch-white.svg"
                        activeImageSource="/public/images/twitch-purple.svg"
                    >
                        View Live Streams
                    </SocialPanel>
                    <SocialPanel
                        url="https://www.youtube.com/channel/UCAVGepRORPE9XR8pbp8As0g"
                        title="YouTube"
                        imageSource="/public/images/youtube-white.png"
                        activeImageSource="/public/images/youtube-red.png"
                    >
                        View Video Archive
                    </SocialPanel>
                    <SocialPanel
                        url="https://twitter.com/ChrisStreamCode"
                        title="Twitter"
                        imageSource="/public/images/twitter-white.svg"
                        activeImageSource="/public/images/twitter-blue.svg"
                    >
                        Connect
                    </SocialPanel>
                    <SocialPanel
                        url="https://github.com/samanime"
                        title="GitHub"
                        imageSource="/public/images/github-white.png"
                        activeImageSource="/public/images/github-dark.png"
                    >
                        Checkout Code
                    </SocialPanel>
                    <SocialPanel
                        url="https://www.instagram.com/chrisstreamingcode"
                        title="Instagram"
                        imageSource="/public/images/instagram-white.png"
                        activeImageSource="/public/images/instagram-color.png"
                    >
                        Follow
                    </SocialPanel>
                </div>
            </div>
        </div>;
    }
}