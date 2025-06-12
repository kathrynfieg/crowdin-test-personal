import { createI18n } from "vue-i18n"
import {  enUS, esES, frFR } from "./locales"

export type MessageSchema = typeof enUS
export type LanguageOptions = "en-US" | "es-ES" | "fr-FR"
export const availableLanguages: LanguageOptions[] = ["en-US", "es-ES", "fr-FR"]


const datetimeFormats = {
  "en-US": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  },
  "es-ES": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  },
  "fr-FR": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  },
  "de-DE": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  },
} as const

export const i18n = createI18n<[MessageSchema], LanguageOptions, false>({
  locale: "en-US",
  fallbackLocale: "en-US",
  legacy: false,
  globalInjection: true,
  datetimeFormats,
  messages: {
    "en-US": enUS,
    "es-ES": esES,
    "fr-FR": frFR,
  },
})
