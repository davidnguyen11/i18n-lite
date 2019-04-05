import * as IntlMsgFormat from 'intl-messageformat';
import { GlobalLocale, I18n, I18nOptions, CallBackFunction, Dictionary } from '../typings/i18n';

/**
 * Global variable for locale: en | vi | jp ...
 * */
export declare var globalLocale: string;

export function getI18n({ messages }: I18nOptions): I18n {
  return {
    messages: () => getMessages(messages(globalLocale)),
  };
}

/**
 * Set value (en | vi | jp ...) to global variable
 * */
export function setGlobalLocale(options: GlobalLocale) {
  globalLocale = options.locale;
}

/**
 * Turn each message in object to method
 * */
function getMessages(messages: Dictionary<string>): Dictionary<CallBackFunction> {
  const result: Dictionary<CallBackFunction> = {};
  const { default: IntlMessageFormat } = IntlMsgFormat;

  Object.keys(messages).map((key: string) => {
    result[key] = (values: Dictionary<string>) => {
      const msg = new IntlMessageFormat(messages[key], globalLocale);
      return msg.format(values);
    };
  });

  return result;
}
