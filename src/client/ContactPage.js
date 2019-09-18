/* global React, ReactRouterDOM */

const { NavLink } = ReactRouterDOM;

export default class ContactPage extends React.PureComponent {
    render() {
        return <div className="ContactPage">
            <h1>Contact</h1>
            <NavLink to={ "/social" }>Connect on Social Media</NavLink>
        </div>;
    }
}