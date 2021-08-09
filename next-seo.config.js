const title = "Design Genius";
const description =
  "A professionally designed brochure, business card, logo, and website can attract customers and add profit to your bottom line. I can help you with that. Contact me now for a free consultation.";

export default {
  title,
  description,
  canonical: "https://www.designgenius.ca/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.designgenius.ca/",
    title,
    description,
    images: [{ url: "https://www.designgenius.ca/images/site/dg-thumb.png" }],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
