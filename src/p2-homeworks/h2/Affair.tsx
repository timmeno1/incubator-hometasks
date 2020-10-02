import React, {useState} from "react";
import {AffairType} from "./HW2";
import css from "./Affairs.module.css"

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div>
            <p className={css.item}>
                {props.affair.name}<span>{props.affair.priority}</span>
                <button className={css.button} onClick={deleteCallback}>X</button>
            </p>
        </div>
    );
}

export default Affair;
