<<<<<<< HEAD
let hello = prompt;
let goodBye = hello;
=======
class employee {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(name: string, code: number, department: string) {
    super();
    this.department = department;
  }
}

let empl = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error
>>>>>>> f89c689 (Modified m1.ts & m2.ts file in develop branch)
