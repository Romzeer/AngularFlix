export class User {
  email: string = null;
  password: string = null;
  lastname: string = null;
  firstname: string = null;

  constructor(user: any = {}) {

    this.lastname = user.lastname || null;
    this.email = user.email || null;
    this.password = user.password || null;
    this.firstname = user.firstname || null;
  }
}
