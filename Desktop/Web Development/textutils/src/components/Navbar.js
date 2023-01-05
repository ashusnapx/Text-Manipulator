import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default function Navbar( props ) {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-${ props.mode } bg-${ props.mode }`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://github.com/ashusnapx" target="#">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/ashutosh-kumar-384387201/" target="#">LinkedIn</a>
                        </li>
                        
                        
                    </ul>
                    <div className={`form-check form-switch text-${ props.mode === 'light' ? '#42743' : 'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <div>
                        <div className={`form-check form-switch mx-3 text-${ props.mode === 'light' ? '#121212' : 'light' }`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.tog} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Special Dark Mode</label>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
            
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    homeText: 'Set home text here',
    aboutText: 'Set about text here'
};