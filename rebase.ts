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
