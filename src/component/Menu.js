import { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return(
        <div className = "menu">
            <h1>Menu Component</h1>
            <button onClick={()=>setAppState("quiz")}>Start the test!!!!</button>
        </div>
    )
}

export default Menu;