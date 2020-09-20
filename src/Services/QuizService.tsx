import {QuestionType,Quiz} from './../Types/quiz_types';

const shuffalArray = (arry:any[])=>
[...arry].sort(()=>Math.random() - 0.4)


export const Quizdetail = async (value1:number ,level:string) :Promise<Quiz[]>=>{
    const data = await fetch(`https://opentdb.com/api.php?amount=${value1}&difficulty=${level}&type=multiple`);
    let  {results} = await data.json();
    const quiz :Quiz[] = results.map((questionobj:QuestionType)=>{
        return{
            question:questionobj.question,
            answer:questionobj.correct_answer,
            correct_answer:questionobj.correct_answer,
            option:shuffalArray( questionobj.incorrect_answers.concat(questionobj.correct_answer)),
        }
    })
    return quiz;

}