import { QuizMakerOutputData } from "../types/output";

export const quizSampleIPS: QuizMakerOutputData = {
  version: "1",
  metadata: {
    title: "Kuis IPS Dasar",
    description: "Pengetahuan umum Ilmu Pengetahuan Sosial",
    config: {
      shuffleQuestions: true,
      shuffleOptions: true,
      revealCorrectAnswer: true,
      timeLimitSeconds: 600,
    },
  },
  questions: [
    {
      questionId: "ips-q1",
      text: "Kegiatan menyalurkan barang dari produsen ke konsumen disebut?",
      options: [
        { optionId: "a", text: "Produksi" },
        { optionId: "b", text: "Distribusi" },
        { optionId: "c", text: "Konsumsi" },
        { optionId: "d", text: "Investasi" },
      ],
      correctOptionId: "b",
      explanation: "Distribusi adalah penyaluran barang.",
    },
    {
      questionId: "ips-q2",
      text: "Mata uang resmi Indonesia adalah?",
      options: [
        { optionId: "a", text: "Dollar" },
        { optionId: "b", text: "Ringgit" },
        { optionId: "c", text: "Rupiah" },
        { optionId: "d", text: "Yen" },
      ],
      correctOptionId: "c",
      explanation: "Rupiah adalah mata uang Indonesia.",
    },
    {
      questionId: "ips-q3",
      text: "Benua terbesar di dunia adalah?",
      options: [
        { optionId: "a", text: "Afrika" },
        { optionId: "b", text: "Asia" },
        { optionId: "c", text: "Eropa" },
        { optionId: "d", text: "Amerika" },
      ],
      correctOptionId: "b",
      explanation: "Asia adalah benua terbesar.",
    },
    {
      questionId: "ips-q4",
      text: "Kegiatan membeli barang disebut?",
      options: [
        { optionId: "a", text: "Produksi" },
        { optionId: "b", text: "Distribusi" },
        { optionId: "c", text: "Konsumsi" },
        { optionId: "d", text: "Ekspor" },
      ],
      correctOptionId: "c",
      explanation: "Konsumsi adalah kegiatan memakai barang.",
    },
    {
      questionId: "ips-q5",
      text: "Penduduk asli suatu wilayah disebut?",
      options: [
        { optionId: "a", text: "Migran" },
        { optionId: "b", text: "Urban" },
        { optionId: "c", text: "Pribumi" },
        { optionId: "d", text: "Pendatang" },
      ],
      correctOptionId: "c",
      explanation: "Pribumi adalah penduduk asli.",
    },
    {
      questionId: "ips-q6",
      text: "Kegiatan menjual barang ke luar negeri disebut?",
      options: [
        { optionId: "a", text: "Impor" },
        { optionId: "b", text: "Ekspor" },
        { optionId: "c", text: "Distribusi" },
        { optionId: "d", text: "Produksi" },
      ],
      correctOptionId: "b",
      explanation: "Ekspor adalah penjualan ke luar negeri.",
    },
    {
      questionId: "ips-q7",
      text: "Peta yang menunjukkan keadaan permukaan bumi disebut?",
      options: [
        { optionId: "a", text: "Peta politik" },
        { optionId: "b", text: "Peta tematik" },
        { optionId: "c", text: "Peta topografi" },
        { optionId: "d", text: "Peta sosial" },
      ],
      correctOptionId: "c",
      explanation: "Topografi menggambarkan permukaan bumi.",
    },
    {
      questionId: "ips-q8",
      text: "Jumlah penduduk dalam suatu wilayah disebut?",
      options: [
        { optionId: "a", text: "Migrasi" },
        { optionId: "b", text: "Populasi" },
        { optionId: "c", text: "Urbanisasi" },
        { optionId: "d", text: "Demografi" },
      ],
      correctOptionId: "b",
      explanation: "Populasi adalah jumlah penduduk.",
    },
    {
      questionId: "ips-q9",
      text: "Kegiatan memindahkan penduduk ke wilayah baru disebut?",
      options: [
        { optionId: "a", text: "Urbanisasi" },
        { optionId: "b", text: "Migrasi" },
        { optionId: "c", text: "Transmigrasi" },
        { optionId: "d", text: "Evakuasi" },
      ],
      correctOptionId: "c",
      explanation: "Transmigrasi memindahkan penduduk antar wilayah.",
    },
    {
      questionId: "ips-q10",
      text: "Ilmu yang mempelajari masyarakat disebut?",
      options: [
        { optionId: "a", text: "Antropologi" },
        { optionId: "b", text: "Sosiologi" },
        { optionId: "c", text: "Geografi" },
        { optionId: "d", text: "Ekonomi" },
      ],
      correctOptionId: "b",
      explanation: "Sosiologi mempelajari masyarakat.",
    },
  ],
};
