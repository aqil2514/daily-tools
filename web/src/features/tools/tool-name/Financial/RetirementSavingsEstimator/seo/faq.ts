import { LocalizedFAQ } from "@/@types/metadata";

export const retirementSavingsFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a retirement savings estimator?",
      answer:
        "A retirement savings estimator helps you estimate how much you need to save each month to reach a target retirement fund based on your current age, target retirement age, existing savings, and expected annual return.",
    },
    {
      question: "How is the monthly retirement saving calculated?",
      answer:
        "This estimator calculates the future value of your current savings using compound growth and then determines the required monthly contribution needed to reach your retirement target within the remaining time.\n\n" +
        "Related concepts:\n" +
        "- [Wikipedia – Compound interest](https://en.wikipedia.org/wiki/Compound_interest)\n" +
        "- [Investopedia – Future Value](https://www.investopedia.com/terms/f/futurevalue.asp)",
    },
    {
      question: "Does this tool consider inflation?",
      answer:
        "No. This tool does not include inflation in the calculation. It focuses on providing a simple estimation using a fixed annual return rate. Inflation adjustments may be added in future versions.",
    },
    {
      question: "Is this a financial planning or advisory tool?",
      answer:
        "No. This tool provides an estimation only and does not offer financial advice. The results are intended for educational and planning purposes.",
    },
    {
      question: "Can I use this estimator for early retirement planning?",
      answer:
        "Yes. You can set any target retirement age, including early retirement, as long as it is greater than your current age.",
    },
    {
      question: "Is my data stored or sent to a server?",
      answer:
        "No. All calculations are performed locally in your browser. No personal or financial data is stored or transmitted.",
    },
  ],

  id: [
    {
      question: "Apa itu estimator tabungan pensiun?",
      answer:
        "Estimator tabungan pensiun membantu memperkirakan berapa besar tabungan bulanan yang dibutuhkan untuk mencapai target dana pensiun berdasarkan usia saat ini, target usia pensiun, tabungan yang sudah ada, dan estimasi return tahunan.",
    },
    {
      question: "Bagaimana cara menghitung tabungan pensiun bulanan?",
      answer:
        "Estimator ini menghitung nilai masa depan dari tabungan yang sudah Anda miliki menggunakan bunga majemuk, lalu menentukan jumlah tabungan bulanan yang diperlukan untuk mencapai target dana pensiun.\n\n" +
        "Konsep terkait:\n" +
        "- [Wikipedia – Bunga majemuk](https://en.wikipedia.org/wiki/Compound_interest)\n" +
        "- [Investopedia – Nilai masa depan](https://www.investopedia.com/terms/f/futurevalue.asp)",
    },
    {
      question: "Apakah alat ini memperhitungkan inflasi?",
      answer:
        "Tidak. Alat ini belum memperhitungkan inflasi dan hanya menggunakan estimasi return tahunan tetap untuk memberikan gambaran sederhana.",
    },
    {
      question: "Apakah ini termasuk alat perencanaan atau nasihat keuangan?",
      answer:
        "Tidak. Alat ini hanya memberikan estimasi dan bukan merupakan nasihat keuangan. Hasil perhitungan ditujukan untuk edukasi dan perencanaan pribadi.",
    },
    {
      question: "Apakah bisa digunakan untuk rencana pensiun dini?",
      answer:
        "Ya. Anda bebas menentukan usia pensiun, termasuk pensiun dini, selama usia target lebih besar dari usia saat ini.",
    },
    {
      question: "Apakah data saya disimpan atau dikirim ke server?",
      answer:
        "Tidak. Semua perhitungan dilakukan langsung di browser tanpa menyimpan atau mengirim data apa pun.",
    },
  ],
};

export default retirementSavingsFAQ;
