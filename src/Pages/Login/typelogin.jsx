export const login = async (user, password) => {
    try {
        const response = await fetch('http://localhost:3001/users');
        const json = await response.json();
        let type;

        const userObj = json.find(obj => obj.username == user);
        if(userObj && userObj.password == password){
            type = userObj.username.split('@')[1].split('.com')[0];
        }

        if (type == "aluno" || type == "professor" || type == "escola") {
            return { type, username: userObj.username};
        }
        else {
            alert('Usuário não encontrado');
        }
    }
    catch(error){
        console.log(error);
    }
}
