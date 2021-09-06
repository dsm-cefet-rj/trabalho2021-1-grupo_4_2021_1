export const login = (username, password, users) => {
    const login = users.find(u => u.username === username);
    console.log(login);
    if(login.password === password) return login;
}
