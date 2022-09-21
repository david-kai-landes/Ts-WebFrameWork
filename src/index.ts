import { User } from "./modals/User";

const user = new User({ name: " New Record ", age: 0 });

user.events.on("change", () => {
  console.log("Change !");
});

user.events.trigger("change");
