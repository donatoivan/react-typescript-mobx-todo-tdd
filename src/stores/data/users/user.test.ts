import { User } from "./user";

describe("User", () => {
  test("User is created with default properties", () => {
    let user = new User("User1");

    expect(user.name).toEqual("User1");
    expect(user.id).toEqual(1);
  });
});
