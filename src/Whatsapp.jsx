import { useState } from "react";
import MessageBox from "./MessageBox";
import ChatBox from "./ChatBox";
export default function Whatsapp() {
    let [mssg, setMssg] = useState({
        from:"krish",
        to:"ayush",
        mssg:"send idea",
    });

    let updateMessage = (info) => {
        setMssg(info)
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>whatsapp</h1>
            <MessageBox updateMessage={updateMessage}/>
            <ChatBox infoMssg={mssg}/>
        </div>
    )
}