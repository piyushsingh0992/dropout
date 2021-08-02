import { loginHandler } from "./reducer";

test("checking loggin in ", () => {
  const initialState = {
    loginStatus: false,
    mentor: false,
    userKey: null,
    userName: null,
    token: null,
  };

  const action = {
    type: "LOGIN",
    payload: {
      loginStatus: true,
      mentor: false,
      userKey: "abc",
      userName: "a",
      token: "abc@123",
    },
  };

  const expectedState = {
    loginStatus: true,
    mentor: false,
    userKey: "abc",
    userName: "a",
    token: "abc@123",
  };
  const result = loginHandler(initialState, action);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "loginStatus",
    JSON.stringify({
        loginStatus: true,
        mentor: false,
        userKey: "abc",
        userName: "a",
        token: "abc@123",
    })
  );
  expect(result).toEqual(expectedState);
});

  test("checking loggin Out ", () => {
    const initialState = {
        loginStatus: true,
        mentor: false,
        userKey: "abc",
        userName: "a",
        token: "abc@123",
    };

    const expectedState = {
        loginStatus: false,
        mentor: false,
        userKey: null,
        userName: null,
        token: null,
    };

    const action = {
      type: "LOGOUT",
    };

    const result = loginHandler(initialState, action);
    expect(localStorage.removeItem).toHaveBeenLastCalledWith("loginStatus");
    expect(result).toEqual(expectedState);
  });
