import { useContext } from "react";
import DataContext from "./DataContext";

function Messages() {

    const {msgs, setMsgs} = useContext(DataContext);
    const closeMsgs = id => {
        setMsgs(m => m.filter (mes => mes.id !== id))
    }

    if(msgs.length === 0) {
        return null;
    }

  return (
    <div className="msg-bin">
        {
            msgs.map(m =>
        
            <div className="toast show" role="alert">
                <div className="toast-header">
                    <strong className="me-auto">Movies</strong>
                    <button onClick={() => closeMsgs(m.id)} type="button" className="btn-close"></button>
                </div>
                <div className="toast-body">
                    {m.text}
                </div>
            </div>

                )
    }
    </div>

    )
}
  

export default Messages;
