import React, { useState } from 'react';
import './QuizCard.css';
import { questionpropsType } from './../Types/quiz_types';

export const QuizCard: React.FC<questionpropsType> = ({ question, options,variable ,callback}) => {
 
    const [selectAns, setselectAns] = useState(" ");
    const handleSelect = (e:any)=>{
        setselectAns(e.target.value);
    }

    return (
        <>
        <div className="video-container">
        <video src="/video/video-1.mp4"  autoPlay loop muted />
        <div className="question_container">
            <div className="question">
                <h2 style={{alignItems:"center",marginLeft:"80px"}}> <b>Score</b> is {variable} Out of  10
                </h2>
               <p style={{fontSize:"100%",fontFamily:"arial"}}>
                   {question}
                   </p> 
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectAns)} className="question-form">
                {options.map((opt: string, index: number) =>
                    <div key={index}>
                        <label className="radio">
                            <input
                                type="radio"
                                name="opt"
                                value={opt}
                                checked={selectAns === opt}
                                required
                                onChange={handleSelect}
                                />
                            {opt}
                        </label>
                    </div>
                )}
                <input type="submit" className="submit"/>
            </form>
        </div>
                </div>
        </>
    )
}






