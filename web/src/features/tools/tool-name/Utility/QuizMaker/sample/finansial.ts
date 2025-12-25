import { Locale } from "next-intl";
import { QuizMakerOutputData } from "../types/output";

export type SampleData = Record<Locale, QuizMakerOutputData>;

export const quizSampleFinansial: SampleData = {
  id: {
    version: "1",
    metadata: {
      title: "Kuis Dasar Finansial",
      description: "Pengetahuan dasar keuangan dan ekonomi",
      config: {
        shuffleQuestions: true,
        shuffleOptions: true,
        revealCorrectAnswer: true,
        timeLimitSeconds: 600,
      },
    },
    questions: [
      {
        questionId: "fin-q1",
        text: "Uang yang disimpan di bank disebut?",
        options: [
          { optionId: "a", text: "Utang" },
          { optionId: "b", text: "Tabungan" },
          { optionId: "c", text: "Pinjaman" },
          { optionId: "d", text: "Modal" },
        ],
        correctOptionId: "b",
        explanation: "Tabungan adalah uang yang disimpan di bank.",
      },
      {
        questionId: "fin-q2",
        text: "Pendapatan dikurangi pengeluaran disebut?",
        options: [
          { optionId: "a", text: "Utang" },
          { optionId: "b", text: "Laba" },
          { optionId: "c", text: "Modal" },
          { optionId: "d", text: "Inflasi" },
        ],
        correctOptionId: "b",
        explanation: "Laba adalah selisih antara pendapatan dan biaya.",
      },
      {
        questionId: "fin-q3",
        text: "Kenaikan harga barang secara umum disebut?",
        options: [
          { optionId: "a", text: "Deflasi" },
          { optionId: "b", text: "Resesi" },
          { optionId: "c", text: "Inflasi" },
          { optionId: "d", text: "Devaluasi" },
        ],
        correctOptionId: "c",
        explanation: "Inflasi adalah kenaikan harga barang dan jasa secara umum.",
      },
      {
        questionId: "fin-q4",
        text: "Uang yang dipinjamkan dan harus dikembalikan disebut?",
        options: [
          { optionId: "a", text: "Tabungan" },
          { optionId: "b", text: "Utang" },
          { optionId: "c", text: "Investasi" },
          { optionId: "d", text: "Laba" },
        ],
        correctOptionId: "b",
        explanation: "Utang adalah kewajiban yang harus dikembalikan.",
      },
      {
        questionId: "fin-q5",
        text: "Kegiatan menanam modal untuk memperoleh keuntungan disebut?",
        options: [
          { optionId: "a", text: "Menabung" },
          { optionId: "b", text: "Investasi" },
          { optionId: "c", text: "Konsumsi" },
          { optionId: "d", text: "Distribusi" },
        ],
        correctOptionId: "b",
        explanation: "Investasi dilakukan untuk memperoleh keuntungan di masa depan.",
      },
      {
        questionId: "fin-q6",
        text: "Pajak merupakan sumber utama dari?",
        options: [
          { optionId: "a", text: "Pendapatan negara" },
          { optionId: "b", text: "Utang negara" },
          { optionId: "c", text: "Pengeluaran negara" },
          { optionId: "d", text: "Subsidi" },
        ],
        correctOptionId: "a",
        explanation: "Pajak merupakan sumber utama pendapatan negara.",
      },
      {
        questionId: "fin-q7",
        text: "Kartu yang digunakan untuk transaksi non-tunai disebut?",
        options: [
          { optionId: "a", text: "KTP" },
          { optionId: "b", text: "ATM" },
          { optionId: "c", text: "SIM" },
          { optionId: "d", text: "NPWP" },
        ],
        correctOptionId: "b",
        explanation: "Kartu ATM digunakan untuk transaksi perbankan.",
      },
      {
        questionId: "fin-q8",
        text: "Bunga dalam konteks perbankan adalah?",
        options: [
          { optionId: "a", text: "Keuntungan dari pinjaman" },
          { optionId: "b", text: "Hadiah" },
          { optionId: "c", text: "Pajak" },
          { optionId: "d", text: "Subsidi" },
        ],
        correctOptionId: "a",
        explanation: "Bunga adalah imbal hasil dari pinjaman atau simpanan.",
      },
      {
        questionId: "fin-q9",
        text: "Perencanaan keuangan pribadi dikenal dengan istilah?",
        options: [
          { optionId: "a", text: "Budgeting" },
          { optionId: "b", text: "Trading" },
          { optionId: "c", text: "Produksi" },
          { optionId: "d", text: "Distribusi" },
        ],
        correctOptionId: "a",
        explanation: "Budgeting membantu mengatur pemasukan dan pengeluaran.",
      },
      {
        questionId: "fin-q10",
        text: "Dana darurat sebaiknya digunakan untuk?",
        options: [
          { optionId: "a", text: "Liburan" },
          { optionId: "b", text: "Belanja konsumtif" },
          { optionId: "c", text: "Kondisi tak terduga" },
          { optionId: "d", text: "Investasi" },
        ],
        correctOptionId: "c",
        explanation: "Dana darurat digunakan untuk kebutuhan mendesak.",
      },
    ],
  },

  en: {
    version: "1",
    metadata: {
      title: "Basic Financial Quiz",
      description: "Basic knowledge of finance and economics",
      config: {
        shuffleQuestions: true,
        shuffleOptions: true,
        revealCorrectAnswer: true,
        timeLimitSeconds: 600,
      },
    },
    questions: [
      {
        questionId: "fin-q1",
        text: "Money saved in a bank is called?",
        options: [
          { optionId: "a", text: "Debt" },
          { optionId: "b", text: "Savings" },
          { optionId: "c", text: "Loan" },
          { optionId: "d", text: "Capital" },
        ],
        correctOptionId: "b",
        explanation: "Savings refer to money kept in a bank.",
      },
      {
        questionId: "fin-q2",
        text: "Income minus expenses is called?",
        options: [
          { optionId: "a", text: "Debt" },
          { optionId: "b", text: "Profit" },
          { optionId: "c", text: "Capital" },
          { optionId: "d", text: "Inflation" },
        ],
        correctOptionId: "b",
        explanation: "Profit is the difference between income and expenses.",
      },
      {
        questionId: "fin-q3",
        text: "A general increase in prices is called?",
        options: [
          { optionId: "a", text: "Deflation" },
          { optionId: "b", text: "Recession" },
          { optionId: "c", text: "Inflation" },
          { optionId: "d", text: "Devaluation" },
        ],
        correctOptionId: "c",
        explanation: "Inflation refers to a general rise in prices.",
      },
      {
        questionId: "fin-q4",
        text: "Money that must be repaid is called?",
        options: [
          { optionId: "a", text: "Savings" },
          { optionId: "b", text: "Debt" },
          { optionId: "c", text: "Investment" },
          { optionId: "d", text: "Profit" },
        ],
        correctOptionId: "b",
        explanation: "Debt is an obligation that must be repaid.",
      },
      {
        questionId: "fin-q5",
        text: "The activity of investing capital to earn profit is called?",
        options: [
          { optionId: "a", text: "Saving" },
          { optionId: "b", text: "Investment" },
          { optionId: "c", text: "Consumption" },
          { optionId: "d", text: "Distribution" },
        ],
        correctOptionId: "b",
        explanation: "Investment aims to generate future profit.",
      },
      {
        questionId: "fin-q6",
        text: "Taxes are a primary source of?",
        options: [
          { optionId: "a", text: "Government revenue" },
          { optionId: "b", text: "Government debt" },
          { optionId: "c", text: "Government spending" },
          { optionId: "d", text: "Subsidies" },
        ],
        correctOptionId: "a",
        explanation: "Taxes fund government revenue.",
      },
      {
        questionId: "fin-q7",
        text: "A card used for cashless transactions is called?",
        options: [
          { optionId: "a", text: "ID Card" },
          { optionId: "b", text: "ATM Card" },
          { optionId: "c", text: "Driver License" },
          { optionId: "d", text: "Tax ID" },
        ],
        correctOptionId: "b",
        explanation: "ATM cards are used for banking transactions.",
      },
      {
        questionId: "fin-q8",
        text: "Interest in banking refers to?",
        options: [
          { optionId: "a", text: "Profit from lending" },
          { optionId: "b", text: "Gift" },
          { optionId: "c", text: "Tax" },
          { optionId: "d", text: "Subsidy" },
        ],
        correctOptionId: "a",
        explanation: "Interest is income earned from lending money.",
      },
      {
        questionId: "fin-q9",
        text: "Personal financial planning is known as?",
        options: [
          { optionId: "a", text: "Budgeting" },
          { optionId: "b", text: "Trading" },
          { optionId: "c", text: "Production" },
          { optionId: "d", text: "Distribution" },
        ],
        correctOptionId: "a",
        explanation: "Budgeting helps manage income and expenses.",
      },
      {
        questionId: "fin-q10",
        text: "An emergency fund should be used for?",
        options: [
          { optionId: "a", text: "Vacation" },
          { optionId: "b", text: "Shopping" },
          { optionId: "c", text: "Unexpected situations" },
          { optionId: "d", text: "Investment" },
        ],
        correctOptionId: "c",
        explanation: "Emergency funds are for urgent and unexpected needs.",
      },
    ],
  },
};
