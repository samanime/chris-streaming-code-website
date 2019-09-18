export default class SocialPanel extends React.PureComponent {
    static defaultProps = {
        imageSource: null,
        activeImageSource: null,
        url: null,
        title: null
    };

    render() {
        const { imageSource, activeImageSource, url, title, children } = this.props;

        return <a href={ url }  className="SocialPanel">
            <div className="image">
                <div className="off" style={ { backgroundImage: `url(${imageSource})` } } />
                <div className="hover" style={ { backgroundImage: `url(${activeImageSource})` } } />
            </div>
            <div className="title">
                { title }
            </div>
            <div className="body">
                { children }
            </div>
        </a>;
    }
}