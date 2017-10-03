export default class LeanrHelper {
  constructor(user) {
    this.user = user;
    this.username = user.username;
    this.password = user.getPassword();
    this.prefix = 'https://learn.tsinghua.edu.cn';
  }
}
