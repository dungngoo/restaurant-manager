import React, { useState, useEffect } from 'react';

function Lobby(props) {
    const { name } = props;
    const [lobby, setLobby] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/lobbies/${name}`);
            const data = await response.json();
            setLobby(data);
            console.log(data);
        }
        fetchData();
    }, [props.name]);

    if (!lobby) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{lobby.name}</h1>
            <p>{lobby.description}</p>
            {/* Render other properties of the lobby object */}
        </div>
    );
}
export default Lobby;
