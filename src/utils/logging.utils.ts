export type Modules =
  | "WaitlistService"
  | "ProfileService"
  | "ResendService"
  | "StripeService"
  | "StripeWebhooks"
  | "StripeBridge"
  | "CRUDService"
  | "AuthService"
  | "OmnisendService"
  | "OmnisendBridge";

type Message = string | object | unknown;

function formatMessage(message: Message) {
  if (typeof message === "object") {
    return JSON.stringify(message, null, 2);
  }
  return message;
}

export const Logger = {
  log: (module: Modules, message: Message) => {
    return console.log(module, formatMessage(message));
  },
  warn: (module: Modules, message: Message) => {
    return console.warn(module, formatMessage(message));
  },
  err: (module: Modules, message: Message) => {
    return console.error(module, formatMessage(message));
  },
};
