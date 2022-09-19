import { User } from "./modals/User";

const user = new User({ name: "my name", age: 20 });

user.on("change", () => {
  console.log("change #1");
});
user.on("change", () => {
  console.log("change #2");
});
user.on("save", () => {
  console.log("save was trigged");
});

user.trigger("save");
