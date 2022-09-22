import { User } from "./modals/User";

const user = new User({ name: " New Record ", age: 0 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("User Was Change");
});

user.set({ name: "New Name" });
