class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

export class Employee extends Person {
  constructor(public empCode: number, name: string) {
    super(name);
    this.empCode = empCode;
  }

  displayName() {
    console.log("Name =" + this.name + ", Employee Code =" + this.empCode);
  }
}

interface IEmployee extends Person {
  empCode: number;
}

let employee: IEmployee = { empCode: 1, name: "James Bond" };
