export default class UserInfo {
  constructor({userSelector, jobSelector}) {
    this._userInputTitle = document.querySelector(userSelector);
    this._jobInputSubtitle = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._userInputTitle.textContent,
      job: this._jobInputSubtitle.textContent
    }
  }

  setUserInfo(name, job) {
    this.getUserInfo();
    this._userInputTitle.textContent = name;
    this._jobInputSubtitle.textContent = job;
  }
}
