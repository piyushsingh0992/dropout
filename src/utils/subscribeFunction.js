import axios from "axios";

export async function subscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch
) {
  subscribeSetter(true);
  try {
    let { data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/subscribe/${mentorId}`
    );

    if (data.status === 200) {
      subscribeDispatch({
        payload: "SUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch({ trigger: true, type: "success", message: "Subscribed" });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Error ! Cannot subscribe",
      });
      subscribeSetter(false);
    }
  } catch (error) {
    console.error("error");
    toastDispatch({
      trigger: true,
      type: "error",
      message: "Error ! Cannot subscribe",
    });
    subscribeSetter(false);
  }
}

export async function unSubscribeMentor(
  mentorId,
  subscribeDispatch,
  subscribeSetter,
  toastDispatch
) {
  subscribeSetter(false);
  try {
    let { data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/subscribe/${mentorId}`
    );

    if (data.status === 200) {
      subscribeDispatch({
        payload: "UNSUBSCRIBE",
        mentorId: data.mentorId,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Unsubscribed",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Error ! Cannot unsubscribe",
      });
      subscribeSetter(true);
    }
  } catch (error) {
    console.error("error");
    toastDispatch({
      trigger: true,
      type: "error",
      message: "Error ! Cannot unsubscribe",
    });
    subscribeSetter(true);
  }
}
