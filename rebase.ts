export class rebase {
  constructor(public id: number, public name: string, public detail: string) {
    this.id = id;
    this.name = name;
    this.detail = detail;
  }
  getDetail() {
    return this.detail;
  }
}

class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

import { Employee } from "./f1";

let employee = new Employee(2, "Pratik");

console.log(employee.displayName());
