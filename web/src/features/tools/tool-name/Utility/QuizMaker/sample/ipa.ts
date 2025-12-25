import { Locale } from "next-intl";
import { QuizMakerOutputData } from "../types/output";

type SampleData = Record<Locale, QuizMakerOutputData>;

export const quizSampleIPA: SampleData = {
  id: {
    version: "1",
    metadata: {
      title: "Kuis IPA Dasar",
      description: "Uji pemahaman dasar Ilmu Pengetahuan Alam",
      config: {
        shuffleQuestions: true,
        shuffleOptions: true,
        revealCorrectAnswer: true,
        timeLimitSeconds: 600,
      },
    },
    questions: [
      {
        questionId: "ipa-q1",
        text: "Proses tumbuhan membuat makanan sendiri disebut?",
        options: [
          { optionId: "a", text: "Respirasi" },
          { optionId: "b", text: "Fotosintesis" },
          { optionId: "c", text: "Fermentasi" },
          { optionId: "d", text: "Transpirasi" },
        ],
        correctOptionId: "b",
        explanation:
          "Fotosintesis adalah proses tumbuhan membuat makanan dengan bantuan cahaya.",
      },
      {
        questionId: "ipa-q2",
        text: "Planet terdekat dengan Matahari adalah?",
        options: [
          { optionId: "a", text: "Venus" },
          { optionId: "b", text: "Bumi" },
          { optionId: "c", text: "Merkurius" },
          { optionId: "d", text: "Mars" },
        ],
        correctOptionId: "c",
        explanation: "Merkurius adalah planet terdekat dari Matahari.",
      },
      {
        questionId: "ipa-q3",
        text: "Bagian alat pernapasan manusia yang berfungsi menukar oksigen dan karbon dioksida adalah?",
        options: [
          { optionId: "a", text: "Bronkus" },
          { optionId: "b", text: "Trakea" },
          { optionId: "c", text: "Alveolus" },
          { optionId: "d", text: "Laring" },
        ],
        correctOptionId: "c",
        explanation:
          "Alveolus berfungsi sebagai tempat pertukaran gas oksigen dan karbon dioksida.",
      },
      {
        questionId: "ipa-q4",
        text: "Perubahan wujud dari cair menjadi gas disebut?",
        options: [
          { optionId: "a", text: "Membeku" },
          { optionId: "b", text: "Menguap" },
          { optionId: "c", text: "Mengembun" },
          { optionId: "d", text: "Mencair" },
        ],
        correctOptionId: "b",
        explanation: "Menguap adalah perubahan wujud dari cair ke gas.",
      },
      {
        questionId: "ipa-q5",
        text: "Bagian tumbuhan yang berfungsi menyerap air dan mineral dari tanah adalah?",
        options: [
          { optionId: "a", text: "Daun" },
          { optionId: "b", text: "Batang" },
          { optionId: "c", text: "Akar" },
          { optionId: "d", text: "Bunga" },
        ],
        correctOptionId: "c",
        explanation: "Akar berfungsi menyerap air dan mineral dari tanah.",
      },
      {
        questionId: "ipa-q6",
        text: "Sumber energi utama bagi kehidupan di Bumi adalah?",
        options: [
          { optionId: "a", text: "Angin" },
          { optionId: "b", text: "Air" },
          { optionId: "c", text: "Matahari" },
          { optionId: "d", text: "Listrik" },
        ],
        correctOptionId: "c",
        explanation: "Matahari merupakan sumber energi utama bagi kehidupan di Bumi.",
      },
      {
        questionId: "ipa-q7",
        text: "Hewan yang memakan tumbuhan disebut?",
        options: [
          { optionId: "a", text: "Karnivora" },
          { optionId: "b", text: "Herbivora" },
          { optionId: "c", text: "Omnivora" },
          { optionId: "d", text: "Insektivora" },
        ],
        correctOptionId: "b",
        explanation: "Herbivora adalah hewan pemakan tumbuhan.",
      },
      {
        questionId: "ipa-q8",
        text: "Gaya yang menyebabkan benda jatuh ke permukaan Bumi adalah?",
        options: [
          { optionId: "a", text: "Gaya magnet" },
          { optionId: "b", text: "Gaya listrik" },
          { optionId: "c", text: "Gaya gesek" },
          { optionId: "d", text: "Gaya gravitasi" },
        ],
        correctOptionId: "d",
        explanation: "Gaya gravitasi menarik benda ke pusat Bumi.",
      },
      {
        questionId: "ipa-q9",
        text: "Zat yang tidak dapat larut dalam air disebut?",
        options: [
          { optionId: "a", text: "Larutan" },
          { optionId: "b", text: "Gas" },
          { optionId: "c", text: "Padatan" },
          { optionId: "d", text: "Zat tidak larut" },
        ],
        correctOptionId: "d",
        explanation: "Zat tidak larut tidak dapat bercampur dengan air.",
      },
      {
        questionId: "ipa-q10",
        text: "Bagian mata yang berfungsi mengatur banyaknya cahaya yang masuk adalah?",
        options: [
          { optionId: "a", text: "Retina" },
          { optionId: "b", text: "Lensa" },
          { optionId: "c", text: "Iris" },
          { optionId: "d", text: "Kornea" },
        ],
        correctOptionId: "c",
        explanation: "Iris mengatur besar kecilnya pupil untuk mengontrol cahaya.",
      },
    ],
  },

  en: {
    version: "1",
    metadata: {
      title: "Basic Science Quiz",
      description: "Test basic knowledge of natural science",
      config: {
        shuffleQuestions: true,
        shuffleOptions: true,
        revealCorrectAnswer: true,
        timeLimitSeconds: 600,
      },
    },
    questions: [
      {
        questionId: "ipa-q1",
        text: "The process by which plants make their own food is called?",
        options: [
          { optionId: "a", text: "Respiration" },
          { optionId: "b", text: "Photosynthesis" },
          { optionId: "c", text: "Fermentation" },
          { optionId: "d", text: "Transpiration" },
        ],
        correctOptionId: "b",
        explanation:
          "Photosynthesis is the process by which plants produce food using sunlight.",
      },
      {
        questionId: "ipa-q2",
        text: "Which planet is closest to the Sun?",
        options: [
          { optionId: "a", text: "Venus" },
          { optionId: "b", text: "Earth" },
          { optionId: "c", text: "Mercury" },
          { optionId: "d", text: "Mars" },
        ],
        correctOptionId: "c",
        explanation: "Mercury is the closest planet to the Sun.",
      },
      {
        questionId: "ipa-q3",
        text: "Which part of the human respiratory system exchanges oxygen and carbon dioxide?",
        options: [
          { optionId: "a", text: "Bronchus" },
          { optionId: "b", text: "Trachea" },
          { optionId: "c", text: "Alveolus" },
          { optionId: "d", text: "Larynx" },
        ],
        correctOptionId: "c",
        explanation:
          "Alveoli are responsible for the exchange of oxygen and carbon dioxide.",
      },
      {
        questionId: "ipa-q4",
        text: "The change of state from liquid to gas is called?",
        options: [
          { optionId: "a", text: "Freezing" },
          { optionId: "b", text: "Evaporation" },
          { optionId: "c", text: "Condensation" },
          { optionId: "d", text: "Melting" },
        ],
        correctOptionId: "b",
        explanation: "Evaporation is the change from liquid to gas.",
      },
      {
        questionId: "ipa-q5",
        text: "Which part of a plant absorbs water and minerals from the soil?",
        options: [
          { optionId: "a", text: "Leaves" },
          { optionId: "b", text: "Stem" },
          { optionId: "c", text: "Roots" },
          { optionId: "d", text: "Flowers" },
        ],
        correctOptionId: "c",
        explanation: "Roots absorb water and minerals from the soil.",
      },
      {
        questionId: "ipa-q6",
        text: "The main source of energy for life on Earth is?",
        options: [
          { optionId: "a", text: "Wind" },
          { optionId: "b", text: "Water" },
          { optionId: "c", text: "The Sun" },
          { optionId: "d", text: "Electricity" },
        ],
        correctOptionId: "c",
        explanation: "The Sun is the primary source of energy for life on Earth.",
      },
      {
        questionId: "ipa-q7",
        text: "Animals that eat plants are called?",
        options: [
          { optionId: "a", text: "Carnivores" },
          { optionId: "b", text: "Herbivores" },
          { optionId: "c", text: "Omnivores" },
          { optionId: "d", text: "Insectivores" },
        ],
        correctOptionId: "b",
        explanation: "Herbivores are animals that eat plants.",
      },
      {
        questionId: "ipa-q8",
        text: "Which force causes objects to fall toward the Earth?",
        options: [
          { optionId: "a", text: "Magnetic force" },
          { optionId: "b", text: "Electric force" },
          { optionId: "c", text: "Friction" },
          { optionId: "d", text: "Gravitational force" },
        ],
        correctOptionId: "d",
        explanation: "Gravity pulls objects toward the center of the Earth.",
      },
      {
        questionId: "ipa-q9",
        text: "A substance that does not dissolve in water is called?",
        options: [
          { optionId: "a", text: "Solution" },
          { optionId: "b", text: "Gas" },
          { optionId: "c", text: "Solid" },
          { optionId: "d", text: "Insoluble substance" },
        ],
        correctOptionId: "d",
        explanation: "Insoluble substances do not dissolve in water.",
      },
      {
        questionId: "ipa-q10",
        text: "Which part of the eye controls the amount of light entering?",
        options: [
          { optionId: "a", text: "Retina" },
          { optionId: "b", text: "Lens" },
          { optionId: "c", text: "Iris" },
          { optionId: "d", text: "Cornea" },
        ],
        correctOptionId: "c",
        explanation:
          "The iris controls the size of the pupil to regulate light.",
      },
    ],
  },
};
