import { articlePageItem, articlePreviewItem } from "../models/interfaces/default/articles.model";

/**
 * This array containes articles. The chosen article is displayed on the article page when clicking "Read article" in the menu
 */
export const ARTICLE_PAGE_CONTENT: articlePageItem = {
  digitalWallets: {
    header: 'Digital wallets gain popularity among young users',
    subheader:
      'Digital wallets are becoming increasingly popular among young adults, as users value fast transfers, easy balance tracking, and simple mobile interfaces.',
    image: 'images/news1_page(1).png',
    image2: 'images/news1_page(2).png',
    date: 'Published on January 18th, 2026',
    author: 'Photo by Unsplash.com',
    content1: `
        Digital wallets are quickly becoming the preferred way for young people to manage their money. With smartphones at the center of daily life, users are choosing mobile-first financial tools that offer speed, convenience, and better control over spending. <br> <br>

        Recent trends show that people aged 18–30 are adopting digital wallets at a much faster rate than traditional banking services. The ability to send money instantly, track expenses in real time, and make payments with just a few taps has made digital wallets a natural fit for this generation.
        `,
    content2: `
        One of the key drivers behind this shift is convenience. Instead of carrying cash or multiple bank cards, users can store payment methods securely in a single app. Whether paying in stores, online, or sending money to friends, transactions can be completed within seconds. <br> <br>

        Security has also improved significantly in recent years. Modern digital wallets use advanced technologies such as biometric authentication, encryption, and real-time fraud monitoring.`,
  },
  zeroFees: {
    header: 'Banks introduce instant transfers with zero fees',
    subheader:
      'Several banks have launched instant money transfers without commissions, aiming to attract more users to their digital banking platforms.',
    image: 'images/news2_page(1).png',
    image2: 'images/news2_page(2).png',
    date: 'Published on January 15th, 2026',
    author: 'Photo by Unsplash.com',
    content1: `
        Banks around the world are beginning to offer instant money transfers with zero fees, marking a significant shift in the way people move money between accounts. <br> <br>

        For many years, transferring money between banks could take hours or even days, especially for international payments. In addition, customers often had to pay extra fees depending on the transfer amount or the receiving bank.`,
    content2: `
        Financial institutions are introducing these services to remain competitive with fintech companies and digital payment platforms that already provide fast and low-cost transactions. <br> <br>

        Experts believe that zero-fee instant transfers will soon become a standard feature across most digital banking platforms.
        `,
  },
  personalFinance: {
    header: 'Personal finance apps help users save more money',
    subheader:
      'New personal finance features such as spending analytics and smart budgeting tools are helping users better control their expenses.',
    image: 'images/news3_page(1).png',
    image2: 'images/news3_page(2).png',
    date: 'Published on December 31st, 2025',
    author: 'Photo by Unsplash.com',
    content1: `
        Personal finance applications are becoming an essential tool for people who want to better understand their spending habits and save more money. <br> <br>

        Many people struggle to track where their money goes each month. Personal finance apps solve this problem by automatically categorizing transactions and presenting them in easy-to-read charts and reports.
        `,
    content2: `
        Another popular feature is smart budgeting. Users can set monthly spending limits for categories such as groceries, entertainment, or transportation. <br> <br>

        Financial experts note that people who regularly track their expenses are more likely to reach their savings goals.
        `,
  },
};

/**
 * This array contains previews of articles which are displayed in the menu
 */
export const ARTICLE_PREVIEW_SECTION: articlePreviewItem[] = [
  {
    image: 'images/articlePreview_digitalWallets.svg',
    date: 'January 18th, 2026',
    title: 'digital wallets gain popularity among young users',
    subtitle:
      'Digital wallets are becoming increasingly popular among young adults, as users value fast transfers, easy balance tracking, and simple mobile interfaces.',
    btnText: 'Read',
    value: 'digitalWallets',
    time: '2 min',
  },
  {
    image: 'images/articlePreview_zeroFees.svg',
    date: 'January 15th, 2026',
    title: 'banks introduce instant transfers with zero fees',
    subtitle:
      'Several banks have launched instant money transfers without commissions, aiming to attract more users to their digital banking platforms.',
    btnText: 'Read',
    value: 'zeroFees',
    time: '1 min',
  },
  {
    image: 'images/articlePreview_personalFinance.svg',
    date: 'December 31st, 2025',
    title: 'personal finance apps help users save more money',
    subtitle:
      'New personal finance features such as spending analytics and smart budgeting tools are helping users better control their expenses.',
    btnText: 'Read',
    value: 'personalFinance',
    time: '3 min',
  },
];
