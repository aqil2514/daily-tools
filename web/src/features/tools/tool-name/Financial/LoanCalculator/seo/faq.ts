import { LocalizedFAQ } from "@/@types/metadata";

export const loanCalculatorFAQ: LocalizedFAQ = {
  en: [
    {
      question: "What is a loan calculator?",
      answer:
        "A loan calculator helps you estimate monthly installments, total interest, and total repayment based on loan amount, interest rate, and loan term.",
    },
    {
      question: "What is the difference between flat interest and effective (annuity) interest?",
      answer:
        "Flat interest calculates interest based on the original loan amount, while effective or annuity interest reduces interest as your loan balance decreases over time.",
    },
    {
      question: "Does this loan calculator send my data to any server?",
      answer:
        "No. All loan calculations are performed locally in your browser. Your data is never uploaded or stored anywhere.",
    },
    {
      question: "Which loan type is commonly used for mortgages?",
      answer:
        "Most banks use the effective interest or annuity method for mortgages (KPR/KPA), as the interest decreases as the loan balance is paid down.",
    },
    {
      question: "Is flat interest more expensive than annuity interest?",
      answer:
        "Yes. Flat-rate loans often result in higher total interest compared to annuity loans, because interest is always calculated from the original loan amount.",
    },
    {
      question: "Why is annuity interest higher at the beginning of the loan?",
      answer:
        "In an annuity system, monthly installments remain fixed, but the composition changes: more interest is paid in the early months and more principal is paid later in the term.",
    },
    {
      question: "Can this calculator handle different currencies?",
      answer:
        "Yes. You can switch between currencies such as IDR, USD, EUR, and JPY. All results automatically adjust to the selected currency format.",
    },
    {
      question: "Can I use this calculator for business loans or personal loans?",
      answer:
        "Yes. This calculator works for personal loans, business loans, consumer loans, and mortgage simulations as long as the interest method is flat or annuity.",
    },
  ],

  id: [
    {
      question: "Apa itu kalkulator pinjaman?",
      answer:
        "Kalkulator pinjaman membantu Anda memperkirakan cicilan bulanan, total bunga, dan total pembayaran berdasarkan jumlah pinjaman, suku bunga, dan jangka waktu pinjaman.",
    },
    {
      question: "Apa perbedaan bunga flat dan bunga efektif (anuitas)?",
      answer:
        "Bunga flat menghitung bunga dari jumlah pinjaman awal, sedangkan bunga efektif atau anuitas membuat bunga menurun seiring berkurangnya sisa pinjaman.",
    },
    {
      question: "Apakah kalkulator ini mengirim data saya ke server?",
      answer:
        "Tidak. Semua perhitungan dilakukan langsung di browser Anda. Data Anda tidak pernah diunggah atau disimpan di mana pun.",
    },
    {
      question: "Jenis pinjaman apa yang biasanya digunakan untuk KPR?",
      answer:
        "Sebagian besar bank menggunakan metode bunga efektif atau anuitas untuk KPR/KPA karena bunganya menurun seiring berkurangnya sisa pinjaman.",
    },
    {
      question: "Apakah bunga flat lebih mahal dibanding bunga anuitas?",
      answer:
        "Ya. Pinjaman dengan bunga flat cenderung menghasilkan total bunga yang lebih besar karena bunga selalu dihitung dari pokok awal, bukan sisa pinjaman.",
    },
    {
      question: "Mengapa pada bunga anuitas cicilan terasa lebih besar di awal?",
      answer:
        "Pada sistem anuitas, cicilan bulanan tetap tetapi komposisinya berubah: porsi bunga lebih besar di awal, sedangkan porsi pokok lebih besar di akhir masa pinjaman.",
    },
    {
      question: "Apakah kalkulator ini mendukung berbagai mata uang?",
      answer:
        "Ya. Anda dapat mengganti mata uang ke IDR, USD, EUR, JPY, dan lainnya. Format angka akan otomatis menyesuaikan.",
    },
    {
      question: "Bisakah kalkulator ini digunakan untuk pinjaman bisnis maupun pribadi?",
      answer:
        "Bisa. Kalkulator ini dapat digunakan untuk simulasi pinjaman pribadi, modal usaha, kredit konsumtif, hingga gambaran awal KPR selama mengikuti metode bunga flat atau anuitas.",
    },
  ],
};

export default loanCalculatorFAQ;
