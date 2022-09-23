import React from "react";
import "./zonechat.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFaceSmile, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';

export default class ZoneChatComponent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <div className="row header-zonechat">
                    <div className="col-12 d-flex align-items-center justify-content-start ">
                        <FontAwesomeIcon className="pe-xl-3 chat-image py-xl-2" icon={faCircleUser}></FontAwesomeIcon>
                        <label>Nombre chat</label>
                    </div>
                </div>
                <div className="zonechat-body container-fluid">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="py-xl-3 card-message-from">
                                Texto
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-end">
                        <div className="col-xl-4">
                            <div className="py-xl-3 card-message-to">
                                Texto
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid zonechat-footer">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-1">
                            <FontAwesomeIcon className="pe-xl-3" icon={faFaceSmile}></FontAwesomeIcon>
                            <FontAwesomeIcon className="" icon={faPaperclip}></FontAwesomeIcon>
                        </div>
                        <div className="col-xl-10">
                            <div class="input-group flex-nowrap">
                                <input type="text" className="form-control my-xl-2" placeholder="Message..." aria-label="Message-chat" aria-describedby="addon-wrapping" />
                            </div>
                        </div>
                        <div className="col-xl-1">
                            <FontAwesomeIcon className="pe-xl-3 py-xl-2" icon={faMicrophone}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}