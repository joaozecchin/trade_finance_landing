export interface FAQItem {
  question: string;
  answer: string;
  category: "product" | "risk" | "process" | "legal";
}

export const faqItems: FAQItem[] = [
  // Product
  {
    question: "What is a Certificado de Recebiveis (CR)?",
    answer:
      "A CR is a Brazilian securitization instrument that allows receivables to be packaged into tradeable securities. It provides a regulated framework for investors to gain exposure to credit rights while benefiting from the legal protections of Brazilian capital markets law.",
    category: "product",
  },
  {
    question: "How is the 12% Senior return determined?",
    answer:
      "The 12% annual return for the Senior tranche is a fixed rate determined by the underlying trade finance loan rates, minus operating costs and the Junior tranche allocation. Senior investors receive priority in the payment waterfall, meaning they are paid first from all returns.",
    category: "product",
  },
  {
    question: "What currencies can I invest in?",
    answer:
      "Investment is accepted in EUR-denominated stablecoins. All capital is held and returns are calculated in EUR, eliminating currency risk for European investors.",
    category: "product",
  },
  {
    question: "What is the difference between Senior and Junior tranches?",
    answer:
      "Senior tranche investors receive a fixed 12% annual return with first priority on payments. Junior tranche investors receive the excess returns above 12% but absorb first losses. Junior offers higher potential returns with higher risk.",
    category: "product",
  },
  // Risk
  {
    question: "What happens if a borrower defaults?",
    answer:
      "All loans are secured by Letters of Credit from reputable banks and physical commodities in transit or warehoused. In case of default, the LC is called upon first. Additionally, cargo insurance and the physical commodity itself provide secondary recovery mechanisms.",
    category: "risk",
  },
  {
    question: "How is the collateral valued and monitored?",
    answer:
      "Collateral is valued based on commodity market prices at the time of loan origination. Throughout the loan term, cargo is tracked via shipping documentation and logistics partners. Warehouse receipts and bills of lading provide proof of goods.",
    category: "risk",
  },
  {
    question: "What is the role of the Letter of Credit?",
    answer:
      "The LC is issued by the importer's bank guaranteeing payment upon presentation of compliant documents. This transfers credit risk from the trader to a financial institution, significantly reducing default risk.",
    category: "risk",
  },
  {
    question: "How diversified is the portfolio?",
    answer:
      "The portfolio is diversified across multiple commodities (cocoa, coffee, grains), geographies (Africa, Europe, Americas), and counterparties. Individual deal sizes are limited to maintain diversification.",
    category: "risk",
  },
  // Process
  {
    question: "How do I invest through BRX.Finance?",
    answer:
      "Visit brx.finance to complete the onboarding process. You'll need to complete KYC verification, connect a wallet with EUR stablecoins, and select your preferred tranche. Investment is then processed on-chain.",
    category: "process",
  },
  {
    question: "What stablecoins are accepted?",
    answer:
      "Currently, EURC and other regulated EUR-denominated stablecoins are accepted. This ensures your investment remains EUR-denominated throughout the process.",
    category: "process",
  },
  {
    question: "How quickly can I expect returns?",
    answer:
      "Returns are generated as underlying trade finance deals complete, typically in 30-90 day cycles. Senior tranche returns accrue daily at the 12% annual rate and are distributed upon deal completion.",
    category: "process",
  },
  {
    question: "Can I withdraw my investment early?",
    answer:
      "Investments are matched to specific trade deals and are generally locked until deal completion. However, secondary market trading may be available through the BRX.Finance platform.",
    category: "process",
  },
  // Legal
  {
    question: "What is the regulatory framework for CRs in Brazil?",
    answer:
      "CRs are regulated by the Brazilian Securities Commission (CVM) and follow established securitization laws. The structure provides investor protections including asset segregation and independent administration.",
    category: "legal",
  },
  {
    question: "How is my investment protected?",
    answer:
      "Investments are held in a segregated Special Purpose Vehicle (SPV) that is bankruptcy-remote from the originator. The CR structure ensures assets backing your investment are legally separated from operational risks.",
    category: "legal",
  },
  {
    question: "What are the tax implications?",
    answer:
      "Tax treatment varies by jurisdiction. The CR structure may offer certain tax efficiencies. We recommend consulting with a tax advisor familiar with your local regulations and cross-border investment structures.",
    category: "legal",
  },
];

export const faqCategories = [
  { id: "product", label: "Product", labelPt: "Produto" },
  { id: "risk", label: "Risk", labelPt: "Risco" },
  { id: "process", label: "Process", labelPt: "Processo" },
  { id: "legal", label: "Legal", labelPt: "Legal" },
] as const;
