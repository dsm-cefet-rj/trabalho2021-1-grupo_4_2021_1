export const login = (username, password, users) => {
    const login = users.find(u => u.username === username);
    return login && login.password === password;
}
