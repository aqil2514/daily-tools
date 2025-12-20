// 📦 CompoundInterestCalculator/i18n/compound-insight.ts
export const i18nCompoundInsight = {
  en: {
    once: {
      positive: {
        primary:
          "Your investment grew by {returnPercentage}% over the selected period.",
        secondary:
          "From an initial investment of {totalInvested}, your portfolio value increased to {futureValue}.",
      },
      neutral: {
        primary:
          "Your investment value did not increase over the selected period.",
        secondary:
          "Your final investment value is {futureValue}, which is equal to your initial capital.",
      },
    },

    monthly: {
      positive: {
        primary:
          "By investing regularly each month, your total investment grew beyond what you contributed.",
        secondary:
          "You invested a total of {totalInvested} and earned {interestEarned} in returns, bringing your portfolio value to {futureValue}.",
        highlights: {
          avgMonthlyGain:
            "On average, your investment generated {avgMonthlyGain} in returns per month.",
          returnPercentage:
            "Your total return represents a {returnPercentage}% gain over your invested capital.",
        },
      },

      neutral: {
        primary:
          "Your total investment value is currently equal to the amount you contributed.",
        secondary:
          "Your total contribution of {totalInvested} has not yet generated additional returns.",
      },
    },
  },

  id: {
    once: {
      positive: {
        primary:
          "Investasi Anda bertumbuh sebesar {returnPercentage}% selama periode yang dipilih.",
        secondary:
          "Dari modal awal sebesar {totalInvested}, nilai portofolio Anda meningkat menjadi {futureValue}.",
      },
      neutral: {
        primary:
          "Nilai investasi Anda tidak mengalami pertumbuhan selama periode ini.",
        secondary:
          "Nilai akhir investasi Anda adalah {futureValue}, sama dengan modal awal.",
      },
    },

    monthly: {
      positive: {
        primary:
          "Dengan berinvestasi secara rutin setiap bulan, nilai investasi Anda tumbuh melebihi total dana yang disetorkan.",
        secondary:
          "Anda menginvestasikan total {totalInvested} dan memperoleh keuntungan sebesar {interestEarned}, sehingga nilai portofolio menjadi {futureValue}.",
        highlights: {
          avgMonthlyGain:
            "Rata-rata, investasi Anda menghasilkan {avgMonthlyGain} per bulan.",
          returnPercentage:
            "Total imbal hasil Anda setara dengan kenaikan {returnPercentage}% dari modal yang diinvestasikan.",
        },
      },

      neutral: {
        primary:
          "Nilai investasi Anda saat ini masih sama dengan total dana yang disetorkan.",
        secondary:
          "Total kontribusi sebesar {totalInvested} belum menghasilkan keuntungan tambahan.",
      },
    },
  },
} as const;

export type I18nCompoundInsight =
  typeof i18nCompoundInsight;
