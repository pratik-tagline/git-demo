class Person {
<<<<<<< HEAD
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
=======
  name: string;
}

interface IEmployee extends Person {
  empCode: number;
}

let employee: IEmployee = { empCode: 1, name: "James Bond" };
>>>>>>> 16c5730 (changes in f1 and d1 file,created develop-rebase.ts file)
