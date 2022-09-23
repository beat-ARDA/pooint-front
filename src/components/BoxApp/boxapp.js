import React from "react";
import "./boxapp.css";
import SideBarComponent from "./SideBar/sidebar";
import ZoneChatComponent from "./ZoneChat/zonechat";

export default class BoxApp extends React.Component {
    render() {
        return (
            <div className="box-app d-flex flex-column container-fluid">
                <div className="row">
                    <div className="col-xl-4 side-bar">
                        <SideBarComponent></SideBarComponent>
                    </div>
                    <div className="col-xl-8 chat-zone">
                        <ZoneChatComponent></ZoneChatComponent>
                    </div>
                </div>
            </div>
        );
    }
}