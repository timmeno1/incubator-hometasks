import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: ()=>void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error  : ""; // need to fix with (?:)

    const errComponent = error ? <span className={s.errorMsg}>{error}</span> : ""

    return (
        <div className={s.container}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            {errComponent}
            <button onClick={addUser}>Add</button>
            <span className={s.totalUsrs}>Total Users: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
