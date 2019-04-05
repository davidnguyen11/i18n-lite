export interface GlobalLocale {
  locale: string;
}

export interface I18n {
  messages(): Dictionary<CallBackFunction>;
}

export interface I18nOptions {
  messages(locale: string): Dictionary<string>;
}

export interface CallBackFunction {
  (values: Dictionary<string>): void
}

export interface Dictionary<T> {
  [key: string]: T;
}