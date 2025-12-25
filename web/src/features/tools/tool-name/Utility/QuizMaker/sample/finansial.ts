import { QuizMakerOutputData } from "../types/output";

export const quizSampleFinansial: QuizMakerOutputData = {
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
      explanation: "Tabungan adalah uang yang disimpan.",
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
      explanation: "Laba adalah selisih pendapatan dan biaya.",
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
      explanation: "Inflasi adalah kenaikan harga secara umum.",
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
      explanation: "Utang harus dikembalikan.",
    },
    {
      questionId: "fin-q5",
      text: "Kegiatan menanam modal untuk keuntungan disebut?",
      options: [
        { optionId: "a", text: "Menabung" },
        { optionId: "b", text: "Investasi" },
        { optionId: "c", text: "Konsumsi" },
        { optionId: "d", text: "Distribusi" },
      ],
      correctOptionId: "b",
      explanation: "Investasi bertujuan memperoleh keuntungan.",
    },
    {
      questionId: "fin-q6",
      text: "Pajak merupakan sumber?",
      options: [
        { optionId: "a", text: "Pendapatan negara" },
        { optionId: "b", text: "Utang negara" },
        { optionId: "c", text: "Pengeluaran negara" },
        { optionId: "d", text: "Subsidi" },
      ],
      correctOptionId: "a",
      explanation: "Pajak adalah sumber pendapatan negara.",
    },
    {
      questionId: "fin-q7",
      text: "Kartu untuk transaksi non-tunai disebut?",
      options: [
        { optionId: "a", text: "KTP" },
        { optionId: "b", text: "ATM" },
        { optionId: "c", text: "SIM" },
        { optionId: "d", text: "NPWP" },
      ],
      correctOptionId: "b",
      explanation: "Kartu ATM digunakan untuk transaksi.",
    },
    {
      questionId: "fin-q8",
      text: "Bunga adalah?",
      options: [
        { optionId: "a", text: "Keuntungan bank" },
        { optionId: "b", text: "Hadiah" },
        { optionId: "c", text: "Pajak" },
        { optionId: "d", text: "Subsidi" },
      ],
      correctOptionId: "a",
      explanation: "Bunga adalah keuntungan dari pinjaman.",
    },
    {
      questionId: "fin-q9",
      text: "Perencanaan keuangan pribadi disebut?",
      options: [
        { optionId: "a", text: "Budgeting" },
        { optionId: "b", text: "Trading" },
        { optionId: "c", text: "Produksi" },
        { optionId: "d", text: "Distribusi" },
      ],
      correctOptionId: "a",
      explanation: "Budgeting mengatur pemasukan dan pengeluaran.",
    },
    {
      questionId: "fin-q10",
      text: "Dana darurat digunakan untuk?",
      options: [
        { optionId: "a", text: "Liburan" },
        { optionId: "b", text: "Belanja" },
        { optionId: "c", text: "Kondisi tak terduga" },
        { optionId: "d", text: "Investasi" },
      ],
      correctOptionId: "c",
      explanation: "Dana darurat untuk kebutuhan mendesak.",
    },
  ],
};
