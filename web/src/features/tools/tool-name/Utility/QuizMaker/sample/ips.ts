import { Locale } from "next-intl";
import { QuizMakerOutputData } from "../types/output";

type SampleData = Record<Locale, QuizMakerOutputData>;

export const quizSampleIPS: SampleData = {
  id: {
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
        explanation: "Distribusi adalah kegiatan menyalurkan barang dari produsen ke konsumen.",
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
        explanation: "Rupiah merupakan mata uang resmi Indonesia.",
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
        explanation: "Asia adalah benua terbesar di dunia.",
      },
      {
        questionId: "ips-q4",
        text: "Kegiatan membeli dan menggunakan barang disebut?",
        options: [
          { optionId: "a", text: "Produksi" },
          { optionId: "b", text: "Distribusi" },
          { optionId: "c", text: "Konsumsi" },
          { optionId: "d", text: "Ekspor" },
        ],
        correctOptionId: "c",
        explanation: "Konsumsi adalah kegiatan menggunakan barang atau jasa.",
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
        explanation: "Pribumi adalah penduduk asli suatu wilayah.",
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
        explanation: "Ekspor adalah kegiatan menjual barang ke luar negeri.",
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
        explanation: "Peta topografi menggambarkan bentuk permukaan bumi.",
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
        explanation: "Populasi adalah jumlah penduduk di suatu wilayah.",
      },
      {
        questionId: "ips-q9",
        text: "Kegiatan memindahkan penduduk dari satu wilayah ke wilayah lain secara terencana disebut?",
        options: [
          { optionId: "a", text: "Urbanisasi" },
          { optionId: "b", text: "Migrasi" },
          { optionId: "c", text: "Transmigrasi" },
          { optionId: "d", text: "Evakuasi" },
        ],
        correctOptionId: "c",
        explanation: "Transmigrasi memindahkan penduduk antar wilayah secara terencana.",
      },
      {
        questionId: "ips-q10",
        text: "Ilmu yang mempelajari hubungan dan kehidupan masyarakat disebut?",
        options: [
          { optionId: "a", text: "Antropologi" },
          { optionId: "b", text: "Sosiologi" },
          { optionId: "c", text: "Geografi" },
          { optionId: "d", text: "Ekonomi" },
        ],
        correctOptionId: "b",
        explanation: "Sosiologi adalah ilmu yang mempelajari masyarakat.",
      },
    ],
  },

  en: {
    version: "1",
    metadata: {
      title: "Basic Social Studies Quiz",
      description: "General knowledge of social studies",
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
        text: "The activity of distributing goods from producers to consumers is called?",
        options: [
          { optionId: "a", text: "Production" },
          { optionId: "b", text: "Distribution" },
          { optionId: "c", text: "Consumption" },
          { optionId: "d", text: "Investment" },
        ],
        correctOptionId: "b",
        explanation: "Distribution is the process of delivering goods to consumers.",
      },
      {
        questionId: "ips-q2",
        text: "What is the official currency of Indonesia?",
        options: [
          { optionId: "a", text: "Dollar" },
          { optionId: "b", text: "Ringgit" },
          { optionId: "c", text: "Rupiah" },
          { optionId: "d", text: "Yen" },
        ],
        correctOptionId: "c",
        explanation: "Rupiah is the official currency of Indonesia.",
      },
      {
        questionId: "ips-q3",
        text: "Which is the largest continent in the world?",
        options: [
          { optionId: "a", text: "Africa" },
          { optionId: "b", text: "Asia" },
          { optionId: "c", text: "Europe" },
          { optionId: "d", text: "America" },
        ],
        correctOptionId: "b",
        explanation: "Asia is the largest continent in the world.",
      },
      {
        questionId: "ips-q4",
        text: "The activity of buying and using goods is called?",
        options: [
          { optionId: "a", text: "Production" },
          { optionId: "b", text: "Distribution" },
          { optionId: "c", text: "Consumption" },
          { optionId: "d", text: "Export" },
        ],
        correctOptionId: "c",
        explanation: "Consumption is the activity of using goods and services.",
      },
      {
        questionId: "ips-q5",
        text: "Native inhabitants of a region are called?",
        options: [
          { optionId: "a", text: "Migrants" },
          { optionId: "b", text: "Urban residents" },
          { optionId: "c", text: "Indigenous people" },
          { optionId: "d", text: "Newcomers" },
        ],
        correctOptionId: "c",
        explanation: "Indigenous people are the original inhabitants of a region.",
      },
      {
        questionId: "ips-q6",
        text: "The activity of selling goods to other countries is called?",
        options: [
          { optionId: "a", text: "Import" },
          { optionId: "b", text: "Export" },
          { optionId: "c", text: "Distribution" },
          { optionId: "d", text: "Production" },
        ],
        correctOptionId: "b",
        explanation: "Export refers to selling goods abroad.",
      },
      {
        questionId: "ips-q7",
        text: "A map that shows the physical features of the Earth's surface is called?",
        options: [
          { optionId: "a", text: "Political map" },
          { optionId: "b", text: "Thematic map" },
          { optionId: "c", text: "Topographic map" },
          { optionId: "d", text: "Social map" },
        ],
        correctOptionId: "c",
        explanation: "Topographic maps show the physical features of the Earth.",
      },
      {
        questionId: "ips-q8",
        text: "The total number of people living in a region is called?",
        options: [
          { optionId: "a", text: "Migration" },
          { optionId: "b", text: "Population" },
          { optionId: "c", text: "Urbanization" },
          { optionId: "d", text: "Demography" },
        ],
        correctOptionId: "b",
        explanation: "Population refers to the total number of people in a region.",
      },
      {
        questionId: "ips-q9",
        text: "The planned movement of people from one region to another is called?",
        options: [
          { optionId: "a", text: "Urbanization" },
          { optionId: "b", text: "Migration" },
          { optionId: "c", text: "Transmigration" },
          { optionId: "d", text: "Evacuation" },
        ],
        correctOptionId: "c",
        explanation: "Transmigration is a planned relocation of people.",
      },
      {
        questionId: "ips-q10",
        text: "The science that studies society and social relationships is called?",
        options: [
          { optionId: "a", text: "Anthropology" },
          { optionId: "b", text: "Sociology" },
          { optionId: "c", text: "Geography" },
          { optionId: "d", text: "Economics" },
        ],
        correctOptionId: "b",
        explanation: "Sociology studies society and social relationships.",
      },
    ],
  },
};
