/* global React, ReactRouterDOM, history */
import SocialPage from './SocialPage';
import HomePage from './HomePage';
import StreamsPage from './StreamsPage';
import VideosPage from './VideosPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import Header from './Header';

const { BrowserRouter, Route, Switch } = ReactRouterDOM;

export default class App extends React.Component {
    render() {
        return <div className="App container-fluid">
            <BrowserRouter history={ history }>
                <Header />
                <Switch>
                    <Route path="/" exact component={ HomePage } />
                    <Route path="/social" component={ SocialPage } />
                    <Route path="/streams" component={ StreamsPage } />
                    <Route path="/abridged-videos" component={ VideosPage } />
                    <Route path="/projects" component={ ProjectsPage } />
                    <Route path="/contact" component={ ContactPage } />
                </Switch>
            </BrowserRouter>
        </div>;
    }
}