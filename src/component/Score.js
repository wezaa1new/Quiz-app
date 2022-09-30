import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";

const Score = () => {
    const {score,setScore,setAppState} = useContext(DataContext)

    const restartApp = () =>{
        setScore(0)
        setAppState("menu")
    }

    return(
        <div className = "score">
            <h1>Your Score</h1>
            <h2>{score}/{QuestionsData.length}</h2>
            <button onClick={restartApp}>Do It Again</button>
        </div>
    )
}

export default Score;