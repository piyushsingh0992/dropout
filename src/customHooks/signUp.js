import { apiCall } from "../apiCall";

import { useToast } from "../contexts/toastContext";

export function useSignUp(signInDetailsSetter, userSetter, setLoader) {
  const { toastDispatch } = useToast();

  return async function () {
    let self = this;
    let args = arguments;
    setLoader(true);
    let { data, success, message } = await apiCall(
      "POST",
      `auth/create`,
      args[0]
    );
    if (success === true) {
      toastDispatch({ type: "success", message: data.message });
      signInDetailsSetter({
        password: args[0].password,
        userId: args[0].userId,
      });
      userSetter((value) => !value);
    } else {
      toastDispatch({ type: "error", message });
    }
    setLoader(false);
  };
}
