/* global React, ReactRouterDOM */

const { NavLink } = ReactRouterDOM;

export default class Header extends React.PureComponent {
    render() {
        return <header className="Header">
            <div className="row">
                <div className="col">
                    <h1>Chris Streaming Code</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/social">Social</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/streams">Streams</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/abridged-videos">Abridged Videos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>;
    }
}