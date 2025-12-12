import { LocalizedFAQ } from "@/@types/metadata";

export const investmentReturnFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) represents the average rate at which an investment grows annually over a given period, assuming the growth is compounded.",
    },
    {
      question: "How is CAGR calculated?",
      answer:
        "CAGR is calculated using the formula: (Final Value / Initial Value)^(1 / Years) - 1.",
    },
    {
      question: "Why is CAGR useful?",
      answer:
        "CAGR helps compare investment performance across different durations and volatility levels by giving a smoothed annual growth rate.",
    },
    {
      question: "Does this tool upload my data to any server?",
      answer:
        "No. All calculations occur locally in your browser. No data is uploaded or stored.",
    },
    {
      question: "Does CAGR account for volatility?",
      answer:
        "No. CAGR does not reflect fluctuations or market volatility. It represents a smoothed growth rate, assuming steady compounded growth.",
    },
    {
      question: "Can CAGR be negative?",
      answer:
        "Yes. If the final value is lower than the initial value, the CAGR will be negative, indicating a decline in investment value over time.",
    },
    {
      question: "How is CAGR different from ROI?",
      answer:
        "ROI measures total return over a period, while CAGR measures the annualized growth rate. CAGR is better for comparing long-term investments.",
    },
    {
      question: "Is CAGR suitable for investments with regular deposits (DCA)?",
      answer:
        "No. CAGR is not ideal for calculating returns from recurring investments such as monthly contributions (DCA). CAGR requires a single initial and final value.",
    },

    {
      question: "Where can I learn more about CAGR?",
      answer:
        "You can read more detailed explanations about CAGR on:\n\n" +
        "- [Investopedia](https://www.investopedia.com/terms/c/cagr.asp)\n" +
        "- [Pintu](https://pintu.co.id/blog/cagr-adalah)",
    },
  ],

  id: [
    {
      question: "Apa itu CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) adalah tingkat pertumbuhan rata-rata tahunan dari suatu investasi dalam periode tertentu, dengan asumsi pertumbuhan bersifat majemuk.",
    },
    {
      question: "Bagaimana cara menghitung CAGR?",
      answer:
        "CAGR dihitung dengan rumus: (Nilai Akhir / Nilai Awal)^(1 / Tahun) - 1.",
    },
    {
      question: "Mengapa CAGR penting?",
      answer:
        "CAGR membantu membandingkan performa investasi antar periode dan tingkat volatilitas dengan memberikan tingkat pertumbuhan rata-rata tahunan.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua perhitungan dilakukan langsung di browser Anda tanpa mengunggah atau menyimpan data.",
    },
    {
      question: "Apakah CAGR memperhitungkan volatilitas?",
      answer:
        "Tidak. CAGR tidak menunjukkan naik-turunnya investasi. CAGR hanya memberikan gambaran pertumbuhan rata-rata dengan asumsi pertumbuhan stabil.",
    },
    {
      question: "Bisakah CAGR bernilai negatif?",
      answer:
        "Ya. Jika nilai akhir lebih rendah daripada nilai awal, CAGR akan bernilai negatif, yang menunjukkan penurunan nilai investasi.",
    },
    {
      question: "Apa perbedaan CAGR dan ROI?",
      answer:
        "ROI menunjukkan total keuntungan dalam satu periode, sedangkan CAGR menunjukkan tingkat pertumbuhan tahunan yang distandardisasi. CAGR lebih cocok untuk analisis jangka panjang.",
    },
    {
      question:
        "Apakah CAGR cocok untuk investasi dengan setoran berkala (DCA)?",
      answer:
        "Tidak. CAGR tidak cocok untuk perhitungan return dari investasi dengan setoran rutin. Rumus CAGR membutuhkan nilai awal dan nilai akhir tunggal.",
    },

    {
      question: "Di mana saya bisa mempelajari CAGR lebih lanjut?",
      answer:
        "Anda dapat membaca penjelasan lengkap tentang CAGR pada sumber berikut:\n\n" +
        "- [Investopedia](https://www.investopedia.com/terms/c/cagr.asp)\n" +
        "- [Pintu](https://pintu.co.id/blog/cagr-adalah)",
    },
  ],
};

export default investmentReturnFAQ;
