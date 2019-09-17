/* global React, ReactRouterDOM */

const { NavLink } = ReactRouterDOM;

export default class SocialPage extends React.PureComponent {
    render() {
        return <div className="SocialPage">
            <div className="row">
                <div className="col">
                    Chris Streaming Code on:
                    <ul>
                        <li>
                            <NavLink to="https://www.twitch.tv/chrisstreamingcode">Twitch</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://www.youtube.com/channel/UCAVGepRORPE9XR8pbp8As0g?view_as=subscriber">
                                YouTube
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://twitter.com/ChrisStreaming">Twitter</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}