/* global React, ReactRouterDOM */

const { NavLink } = ReactRouterDOM;

export default class Header extends React.PureComponent {
    render() {
        return <header className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src="/public/images/logo.png" width="30" height="30" alt="Chris Streaming Code" />
                </NavLink>
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
        </header>;
    }
}