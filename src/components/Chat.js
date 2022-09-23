import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import ConnectedUsers from "./ConnectedUsers";
import { Button } from "react-bootstrap";

const Chat = ({ messages, sendMessage, closeConnection, users }) => <div>
    <div className="leave-room">
        <Button variant="danger" onClick={() => closeConnection()}>Leave Room</Button>
    </div>
    <ConnectedUsers users={users} />
    <div className="chat">
        <MessageContainer messages={messages}></MessageContainer>
        <SendMessageForm sendMessage={sendMessage}></SendMessageForm>
    </div>
</div>

export default Chat;