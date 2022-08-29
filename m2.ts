let hello = prompt;
let goodBye = hello;

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

  constructor(empName: string, empCode: number, department: string) {
    super(empCode, empName);
    this.department = department;
  }
}

let empl = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error
