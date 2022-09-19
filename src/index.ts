import { User } from "./modals/User";

const user = new User({ name: "my name", age: 20 });

user.set({ name: "diffName" });

console.log(user.get("name"));
console.log(user.get("age"));
