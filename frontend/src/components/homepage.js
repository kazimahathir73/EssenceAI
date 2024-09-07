import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
    return (
        <div className="container">
            {/* Header Bar */}
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img 
                            src="/images/logo_banner.png" 
                            alt="Logo" 
                            width="150"
                            height="40"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="row">
                <div className='left-section'>
                    <h1>Save time <span className="highlight">Learn faster</span></h1>
                    <p>
                        Don't read everything. Optimize your time by leveraging AI to provide concise summaries. 
                        By using AI tools to distill information, you can quickly grasp the essential 
                        points without getting bogged down by excessive details.
                    </p>
                    <Link to="/summary/">
                        <button className="btn btn-success">Start Summarize</button>
                    </Link>
                </div>

                <div className='right-section'>
                    <img 
                        src="/images/homepage_gif.gif" 
                        alt="Descriptive GIF" 
                        className="img-fluid" 
                    />
                </div>
            </div>

            <div className="row">

            </div>
        </div>
    );
}

export default Homepage;
