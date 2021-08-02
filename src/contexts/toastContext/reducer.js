export function toastManager(state, action) {
  const { type, message } = action;
  return type === "RESET"
    ? { trigger: false }
    : { trigger: true, type, message };
}
