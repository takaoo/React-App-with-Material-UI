import React, { useState } from 'react';
import io from 'socket.io-client';
export const CTX = React.createContext();

/*
  msg: {
    from: 'user',
    msg: 'message',
    topic: 'general'
  },

  state: {
    topic1: [msg, msg, msg, ...],
    topic2: [msg, msg, ...],
  }
*/


const initState = {
    general: [
    ],
}

function reducer(state, action) {
    const { from, msg, topic } = action.payload;

    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    { from, msg, }
                ]
            }
        case 'ADD_TOPIC':
            return {
                ...state,
                [topic]: [],
            }
        default:
            return state;
    }
}

let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

function addTopicAction(value) {
    socket.emit('add topic', value);
}

function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState);
    const [state, setstate] = useState("")

    if (!socket) {
        socket = io(':3001');
        socket.on("connect", msg => {
            console.log(msg)
            setstate("CONNETCED!!!!!!!!!!")
        })
        socket.on("disconnect", msg => {
            console.log(msg)
        })
        socket.on("connect_failed", msg => {
            console.log(msg)
        })
        socket.on("connect_error", msg => {
            setstate("CONNCT_ERROR")
            console.log(msg)
        })
        socket.on('chat message', msg => {
            dispatch({ type: 'RECEIVE_MESSAGE', payload: msg });
        });
        socket.on('add topic', topic => {
            if (!allChats[topic]) {
                dispatch({ type: 'ADD_TOPIC', payload: { from: '', msg: '', topic } });
            }
        })
    }

    return (
        <CTX.Provider value={{ allChats, sendChatAction, addTopicAction }}>
            <p className="text">{state}</p>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;