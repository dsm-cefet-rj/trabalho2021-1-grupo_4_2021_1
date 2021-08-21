import { render } from 'react-dom';
import { Exam } from '../Exam';
import { CreateExam } from '../CreateExam';
import { ExamResult } from '../ExamResult';

export function checkLogin() {
    let loginType = checkLoginType(document.getElementById("email").value);


    if (loginType == "aluno") {
        render(<Exam />, document.getElementById('root'));  
    } else if (loginType == "professor") {
        render(<CreateExam />, document.getElementById('root'));
    } else if (loginType == "escola") {
        render(<ExamResult />, document.getElementById('root'));
    }
}

function checkLoginType(email) {
    if (email == "aluno@aluno.com") {
        return "aluno";
    } else if (email == "professor@professor.com") {
        return "professor";
    } else if (email == "escola@escola.com") {
        return "escola";
    }
}
