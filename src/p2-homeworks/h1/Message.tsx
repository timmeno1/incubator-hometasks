import React from "react";
import {stringify} from "querystring";
import css from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props:MessageType) {
    return (
        <div className={css.messageBlock}>
            <img className={css.avatar} src={props.avatar} alt=""/>
            <div className={css.innerMessageBlock}>
                <h3 className={css.name}>{props.name}</h3>
                <p className={css.message}>{props.message}</p>
                <span className={css.time}>{props.time}</span>
            </div>

        </div>
    );
}

export default Message;
