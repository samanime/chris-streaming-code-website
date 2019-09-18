/* global React, ReactRouterDOM */

const { NavLink } = ReactRouterDOM;

export default class HomePage extends React.PureComponent {
    render() {
        return <div className="HomePage">
            <h1>Chris Streaming Code</h1>
            <div className="row">
                <div className="col">
                    <p>
                        This is a work in progress. Check out <NavLink to="/social">Social</NavLink> to see available
                        streams and videos for now.
                    </p>
                    <p>
                        This site is being developed in the streams themselves.
                    </p>
                </div>
            </div>
        </div>;
    }
}