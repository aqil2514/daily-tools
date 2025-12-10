import { useLocale } from "next-intl";
import { i18nJwtDecoder } from "../i18n";

export function useJWTDecoderFAQ() {
  const locale = useLocale();
  const t = i18nJwtDecoder[locale];

  return [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
  ];
}
