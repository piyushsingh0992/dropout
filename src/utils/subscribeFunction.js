import { apiCall } from "../apiCall/apiCall";
export async function subscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch,
  userKey
) {
  subscribeSetter(true);

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
}

export async function unSubscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch,
  userKey
) {
  subscribeSetter(false);

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
}
