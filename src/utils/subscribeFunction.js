
import { apiCall } from "../apiCall/apiCall";
export async function subscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch,
  userKey
) {
  subscribeSetter(true);
  try {
    let { data, success, message } = await apiCall(
      "POST",
      `subscribe/${mentorId}`,
      {
        userKey,
      }
    );

    if (success === true) {
      subscribeDispatch({
        payload: "SUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch("success", "Subscribed");
    } else {
      toastDispatch("error", message);
      subscribeSetter(false);
    }
  } catch (error) {
    console.error("error");
    toastDispatch("error", "Error ! Cannot subscribe");
    subscribeSetter(false);
  }
}

export async function unSubscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch,
  userKey
) {
  subscribeSetter(false);
  try {
    let { data, success, message } = await apiCall(
      "DELETE",
      `subscribe/${mentorId}`,
      {
        userKey,
      }
    );

    if (success === true) {
      subscribeDispatch({
        payload: "UNSUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch("success", "Unsubscribed");
    } else {
      toastDispatch("error", message);
      subscribeSetter(true);
    }
  } catch (error) {
    console.error("error");
    toastDispatch("error", "Error ! Cannot unsubscribe");
    subscribeSetter(true);
  }
}
