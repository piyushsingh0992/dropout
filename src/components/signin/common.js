import { apiCall } from "../../apiCall/apiCall";

export async function signInService(
  signInDetails,
  loginDispatch,
  toastDispatch
) {
  try {
    let { data, message, success } = await apiCall(
      "POST",
      "auth",
      signInDetails
    );

    if (success === true) {
      loginDispatch({
        type: "LOGIN",
        payload: {
          loginStatus: data.loginStatus,
          mentor: data.mentor,
          userKey: data.userKey,
          userName: data.userName,
          token: data.token,
        },
      });
      localStorage.setItem(
        "loginStatus",
        JSON.stringify({
          loginStatus: data.loginStatus,
          mentor: data.mentor,
          userKey: data.userKey,
          userName: data.userName,
          token: data.token,
        })
      );
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);
    toastDispatch("error", "Error occured");
  }
}
