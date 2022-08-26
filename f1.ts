class Person {
  name: string;
}

interface IEmployee extends Person {
  empCode: number;
}

let employee: IEmployee = { empCode: 1, name: "James Bond" };
