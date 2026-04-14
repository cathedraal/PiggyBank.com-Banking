export interface articlePreviewItem {
  image: string;
  date: string;
  title: string;
  subtitle: string;
  btnText: string;
  value: string;
  time: string;
}

export interface articlePageItem {
  digitalWallets: {
    header: string;
    subheader: string;
    image: string;
    image2: string;
    date: string;
    author: string;
    content1: string;
    content2: string;
  };
  zeroFees: {
    header: string;
    subheader: string;
    image: string;
    image2: string;
    date: string;
    author: string;
    content1: string;
    content2: string;
  };
  personalFinance: {
    header: string;
    subheader: string;
    image: string;
    image2: string;
    date: string;
    author: string;
    content1: string;
    content2: string;
  };
}
