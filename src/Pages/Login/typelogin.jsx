export function checkLogin() {
    let loginType = checkLoginType(document.getElementById("email").value);


    if (loginType == "aluno") {
        location.pathname = 'aluno'
    } else if (loginType == "professor") {
        location.pathname = 'professor'
    } else if (loginType == "escola") {
        location.pathname = '/resultado'
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
