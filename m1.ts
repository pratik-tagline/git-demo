import { rebase } from "./rebase";

const person1 = new rebase(1, "xyx", "good");

console.log(person1.name);
console.log(person1.getDetail());

class Employee {
  private empCode: number;
  empName: string;
}

let emp = new Employee();
// emp.empCode = 123; // Compiler Error
emp.empName = "Swati"; //OK
