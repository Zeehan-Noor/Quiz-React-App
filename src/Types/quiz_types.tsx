import React from 'react';

export type QuestionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}


export type Quiz =
    {
        question: string,
        option: string[],
        answer:string,
        correct_answer: string,
    }

 export type questionpropsType = {
        question:string,
        options:string[],
        variable:number,
        callback : (e:React.FormEvent<EventTarget>,ans:string)=>void
    }