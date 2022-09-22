import { useEffect, useState } from "react";
import axios from 'axios';

function InnerJoin() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/get-it/inner-join')
        .then(res => setClients(res.data));
    })
    return (
        <ul className="trees">
            <h2>Inner Join</h2>
            {
                clients.map(c => <li className="tree-row">
                <span>{c.name}</span>
                 </li>)
            }
          </ul>
    )
}

export default InnerJoin;
