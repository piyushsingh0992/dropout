import { apiCall } from "../apiCall";
import { useAuth } from "../contexts/authContext";
import { useToast } from "../contexts/toastContext";

export function useSignIn(setLoader) {
  const { toastDispatch } = useToast();
  const { loginDispatch } = useAuth();

  return async function () {
    let self = this;
    let args = arguments;
    setLoader(true);
    let { data, message, success } = await apiCall("POST", "auth", args[0]);
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
    } else {
      toastDispatch("error", message);
    }
    setLoader(false);
  };
}
