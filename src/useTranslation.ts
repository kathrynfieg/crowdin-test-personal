import type { LanguageOptions, MessageSchema } from "./i18n"
import type { NamedValue, UseI18nOptions } from "vue-i18n"
import { inject } from "vue"
import { useI18n } from "vue-i18n"

export const I18nForceKey = Symbol("I18nForceKey")


type PathToLeaves<T, C extends string = ""> = T extends PropertyKey
  ? C
  : {
      [P in keyof T]: P extends string
        ? C extends ""
          ? PathToLeaves<T[P], `${P}`>
          : PathToLeaves<T[P], `${C}.${P}`>
        : never
    }[keyof T]

type TranslationPaths = PathToLeaves<MessageSchema>

export function useTranslation(options: UseI18nOptions<{ message: MessageSchema }> & { force?: LanguageOptions } = {}) {
  const providedForce = inject<LanguageOptions | undefined>(I18nForceKey, undefined)

  const mergedOptions: UseI18nOptions<{ message: MessageSchema }> = {
    useScope: "global",
    ...options,
  }

  const { t, d, n, locale } = useI18n(mergedOptions)

  if (providedForce || options.force)
    locale.value = providedForce ?? options.force!

  // The following strict functions are temporary. They're used to force the locale based on the `providedForce` option.
  // Once the host app experience is fully translated, we can remove these and return the native `t` and `d` functions.
  const strictTranslate = (path: TranslationPaths, named?: NamedValue) => (named ? t(path, named) : t(path))
  const strictDateFormat = (path: Date, format?: "short" | "long") => (format ? d(path, format) : d(path))

  return { t: strictTranslate, d: strictDateFormat, n, locale } as const
}
