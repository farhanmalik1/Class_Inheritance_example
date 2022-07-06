class user {
  constructor() {
    this.age = 14;
    this.model = "2012";
  }

  printAge() {
    console.log(this.age);
  }
}

class Admin extends user {
  constructor() {
    super();
    this.Name = "Farhan";
    this.color = "Red";
  }
  printName() {
    console.log(this.Name);
  }
}

let superAdmin = new Admin();

superAdmin.printAge();
