export const login = (username, password, users) => {
    const login = users.find(u => u.username === username);
    if(login.password === password) return login;
}