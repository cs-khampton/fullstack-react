import { useLocation } from 'react-router-dom';

const pageTitles = {
    '/': 'Introduction',
    '/skills': 'Skills',
    '/projects': 'Projects',
    '/about': 'About Me',
    '/resume': "Resume"
};

function Header() {
    const location = useLocation();
    const title = pageTitles[location.pathname] || 'Portfolio';

    return (
        <header>
            <h1>{"< "}{title}{" />"}</h1>
        </header>
    );
}

export default Header;