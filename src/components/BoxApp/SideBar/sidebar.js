import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMessage, faEllipsisV, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default class SideBarComponent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <div className="row header-sidebar">
                    <div className="col-xl-8 d-flex justify-content-start ">
                        <FontAwesomeIcon className="height-icon py-xl-2" icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div className="col-xl-4 d-flex justify-content-end">
                        <FontAwesomeIcon className="height-icon pe-xl-3 py-xl-2" icon={faMessage}></FontAwesomeIcon>
                        <FontAwesomeIcon className="height-icon py-xl-2" icon={faEllipsisV}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="row search-sidebar">
                    <div className="col">
                        <div class="input-group flex-nowrap">
                            <input type="text" className="form-control my-xl-2" placeholder="Search..." aria-label="Search-chat" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row chat-card">
                        <div className="col-xl-2 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon className="user-image-chat" icon={faCircleUser}></FontAwesomeIcon>
                        </div>
                        <div className="col-xl-8 d-flex flex-column">
                            <label>Nombre chat</label>
                            <label>Texto enviado:</label>
                        </div>
                        <div className="col-xl-2 d-flex flex-column justify-content-center align-items-center">
                            <label>Hora</label>
                            <label>Cantidad</label>
                        </div>
                    </div>
                    <div className="row chat-card">
                        <div className="col-xl-2 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon className="user-image-chat" icon={faCircleUser}></FontAwesomeIcon>
                        </div>
                        <div className="col-xl-8 d-flex flex-column">
                            <label>Nombre chat</label>
                            <label>Texto enviado:</label>
                        </div>
                        <div className="col-xl-2 d-flex flex-column justify-content-center align-items-center">
                            <label>Hora</label>
                            <label>Cantidad</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}