import { User } from "./modals/User";

const user = new User({ name: " New Record ", age: 0 });

user.on("Change", () => {
  console.log("user was changed");
});
