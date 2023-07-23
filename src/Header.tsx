
const Header = () => {
    return (   
    <header>
        <div className="page-title">
        <h1>Phil Edie</h1>
        <div className="page-subtitle">
            <h2 className="page-subtitle--to-type">Software Engineer.</h2>
        </div>
        </div>

        <div className="topnav">
            <a id="projects-page-link" href="index">Projects</a>
            <a id="about-page-link" href="about">About</a>
            <a id="resume-page-link" href="files/Phil Edie Resume.pdf" target="_blank">Résumé</a>
        </div>

        <div className="social-menu">
        <ul>
            <li><a href="https://github.com/PhilEdie" target="_blank"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/philedie" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="mailto:ediephil@gmail.com?Subject=Hello%20Phil" target="_blank"><i className="fa fa-inbox"></i></a></li>
        </ul>
        </div>
    </header>
    )
};

export default Header;
