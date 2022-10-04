import React from "react";
import './zone-chats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

export default class ZoneChat extends React.Component {
    render() {
        return (
            <div className='zonechat d-flex flex-column align-items-center'>
                <div className='row w-100 m-0 header-zonechat'>
                    <div className='col-2 p-0 d-flex align-items-center justify-content-center ps-2'>
                        {this.props.messagesOrteams == "messages" ?
                            <img src='perfil.jpg' className="img-header-zonechat" /> :
                            <img src='equipos.png' className="img-header-zonechat" />}
                    </div>
                    <div className='col-8 p-0 d-flex align-items-center justify-content-center'>
                        <label className="title-chat">{this.props.titleZoneChat}</label>
                    </div>
                    {
                        this.props.videollamada ?
                            <div className="col-2 p-0 d-flex align-items-center justify-content-center pe-2">
                                <FontAwesomeIcon icon={faVideoCamera} size="2x" />
                            </div> : null
                    }
                </div>
                <div className="row w-100 m-0 chat-zone d-flex flex-column">
                    <div className="row w-100 m-0 tarjeta-texto-otro p-2">
                        <div className="col-12 p-0 d-flex align-items-center">
                            <p className="m-0 p-0">Texto</p>
                        </div>
                    </div>
                    <div className="row w-100 m-0 tarjeta-texto-yo p-2">
                        <div className="col-12 p-0 d-flex justify-content-end align-items-center">
                            <p className="m-0 p-0">Texto</p>
                        </div>
                    </div>
                </div>
                <div className="row w-100 m-0 footer-chatzone d-flex align-items-center ">
                    <div className="col-2 p-0 pe-2 d-flex justify-content-end">
                        <FontAwesomeIcon icon={faPaperclip} size="2x" />
                    </div>
                    <div className="col-8 p-0 d-flex align-items-center">
                        <input type="text" className="form-control" placeholder="Message..."
                            aria-label="Message" aria-describedby="basic-addon1" />
                    </div>
                    <div className="col-2 p-0 ps-2">
                        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                    </div>
                </div>
            </div>
        );
    }
}