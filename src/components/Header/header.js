import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="header d-flex flex-column align-items-start container-fluid">
                <FontAwesomeIcon className="arrow-left ps-3 pt-3" icon={faArrowLeft} />
            </header>
        );
    }
}