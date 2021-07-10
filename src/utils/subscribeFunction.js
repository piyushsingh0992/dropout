import axios from "axios";

export async function subscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch,
  userKey
) {
  subscribeSetter(true);
  try {
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/subscribe/${mentorId}`,
      {
        userKey,
      }
    );

    if (status === 200) {
      subscribeDispatch({
        payload: "SUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch("success", "Subscribed");
    } else {
      toastDispatch("error", "Error ! Cannot subscribe");
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
    let { status, data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/subscribe/${mentorId}`,
      {
        data: { userKey },
      }
    );

    if (status === 200) {
      subscribeDispatch({
        payload: "UNSUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch("success", "Unsubscribed");
    } else {
      toastDispatch("error", "Error ! Cannot unsubscribe");
      subscribeSetter(true);
    }
  } catch (error) {
    console.error("error");
    toastDispatch("error", "Error ! Cannot unsubscribe");
    subscribeSetter(true);
  }
}
