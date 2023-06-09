import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css';
import { projectId, userName, userSecret } from "./creds";
const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID={projectId}
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;