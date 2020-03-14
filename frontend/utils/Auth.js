class Auth {
  constructor()
  {
    this.token = null;
    this.user = null;
  }

  login(token, user)
  {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout()
  {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

}

export default new Auth();
