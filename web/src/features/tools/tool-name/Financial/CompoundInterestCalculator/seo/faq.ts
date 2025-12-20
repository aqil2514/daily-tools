import { LocalizedFAQ } from "@/@types/metadata";

export const compoundInterestFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is compound interest?",
      answer:
        "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. This allows investments to grow faster over time.",
    },
    {
      question: "How does compound interest work?",
      answer:
        "Compound interest works by reinvesting earned interest back into the principal, so future interest is calculated on a larger amount.",
    },
    {
      question: "What is the compound interest formula?",
      answer:
        "The basic compound interest formula is: Final Value = Principal × (1 + interest rate)^number of periods.",
    },
    {
      question: "Is compound interest better than simple interest?",
      answer:
        "Yes. Compound interest grows faster than simple interest because interest is calculated on both the principal and previously earned interest.",
    },
    {
      question: "Can this calculator handle monthly contributions?",
      answer:
        "Yes. This calculator supports recurring contributions such as monthly investments, making it suitable for long-term savings and investment planning.",
    },
    {
      question: "Does this tool run entirely in the browser?",
      answer:
        "Yes. All calculations are performed locally in your browser. No financial data is sent to or stored on any server.",
    },
    {
      question: "What is the difference between CAGR and compound interest?",
      answer:
        "CAGR shows the average annual growth rate of an investment, while compound interest calculates the actual accumulated value over time based on compounding.",
    },
    {
      question: "Is compound interest suitable for long-term investing?",
      answer:
        "Yes. Compound interest is most powerful over long time horizons, making it ideal for retirement planning, savings goals, and long-term investments.",
    },
    {
      question: "Can this calculator handle monthly contributions?",
      answer:
        "Yes. This calculator supports a simplified monthly contribution model where the same amount is invested every month. The monthly contribution amount is assumed to be equal to the initial input value.",
    },
    {
      question: "Why can the result be different from real investment apps?",
      answer:
        "This calculator uses a fixed return assumption to simulate investment growth. Real investment platforms may show different results due to market fluctuations, fees, taxes, and daily price changes.",
    },
    {
      question: "Where can I learn more about compound interest?",
      answer:
        "You can read more about compound interest at:\n\n" +
        "- [Investopedia](https://www.investopedia.com/terms/c/compoundinterest.asp)\n" +
        "- [Khan Academy](https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial)",
    },
  ],

  id: [
    {
      question: "Apa itu bunga majemuk?",
      answer:
        "Bunga majemuk adalah bunga yang dihitung dari modal awal ditambah bunga yang telah diperoleh sebelumnya, sehingga nilai investasi dapat tumbuh lebih cepat dari waktu ke waktu.",
    },
    {
      question: "Bagaimana cara kerja bunga majemuk?",
      answer:
        "Bunga majemuk bekerja dengan menambahkan bunga yang diperoleh ke modal, sehingga perhitungan bunga berikutnya dilakukan pada jumlah yang lebih besar.",
    },
    {
      question: "Apa rumus bunga majemuk?",
      answer:
        "Rumus dasar bunga majemuk adalah: Nilai Akhir = Modal × (1 + tingkat bunga)^jumlah periode.",
    },
    {
      question: "Apakah bunga majemuk lebih baik daripada bunga sederhana?",
      answer:
        "Ya. Bunga majemuk menghasilkan pertumbuhan yang lebih cepat karena bunga dihitung dari modal dan bunga yang telah terkumpul.",
    },
    {
      question: "Apakah kalkulator ini mendukung setoran bulanan?",
      answer:
        "Ya. Kalkulator ini mendukung setoran rutin seperti investasi bulanan, sehingga cocok untuk perencanaan tabungan dan investasi jangka panjang.",
    },
    {
      question: "Apakah data saya dikirim ke server?",
      answer:
        "Tidak. Semua perhitungan dilakukan langsung di browser tanpa mengunggah atau menyimpan data apa pun.",
    },
    {
      question: "Apa perbedaan bunga majemuk dan CAGR?",
      answer:
        "CAGR menunjukkan rata-rata pertumbuhan tahunan, sedangkan bunga majemuk menghitung akumulasi nilai investasi secara nyata dari waktu ke waktu.",
    },
    {
      question: "Apakah bunga majemuk cocok untuk investasi jangka panjang?",
      answer:
        "Ya. Bunga majemuk sangat efektif untuk investasi jangka panjang seperti dana pensiun dan tabungan masa depan.",
    },
    {
      question: "Apakah kalkulator ini mendukung setoran bulanan?",
      answer:
        "Ya. Kalkulator ini mendukung simulasi setoran bulanan dengan asumsi jumlah setoran yang sama setiap bulan. Nominal setoran bulanan diasumsikan sama dengan nilai input awal.",
    },
    {
      question:
        "Mengapa hasil simulasi bisa berbeda dengan aplikasi investasi?",
      answer:
        "Kalkulator ini menggunakan asumsi tingkat pengembalian tetap untuk simulasi. Hasil investasi nyata dapat berbeda karena fluktuasi pasar, biaya pengelolaan, pajak, dan perubahan harga harian.",
    },
    {
      question: "Di mana saya bisa mempelajari bunga majemuk lebih lanjut?",
      answer:
        "Anda dapat mempelajari bunga majemuk melalui sumber berikut:\n\n" +
        "- [Investopedia](https://www.investopedia.com/terms/c/compoundinterest.asp)\n" +
        "- [Khan Academy](https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial)",
    },
  ],
};

export default compoundInterestFAQ;
