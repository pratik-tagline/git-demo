import { rebase } from "./rebase";

const person1 = new rebase(1, "xyx", "good");

console.log(person1.name);
console.log(person1.getDetail());
