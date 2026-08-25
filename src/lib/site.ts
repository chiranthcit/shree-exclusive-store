import logo from "@/assets/logo.png.asset.json";
import menCard from "@/assets/men-card.png.asset.json";
import womenCard from "@/assets/women-card.png.asset.json";
import kidsCard from "@/assets/kids-card.png.asset.json";
import aboutStore from "@/assets/about-store.png.asset.json";
import galStorefront from "@/assets/gal-storefront.png.asset.json";
import galFestive from "@/assets/gal-festive.png.asset.json";
import galInside from "@/assets/gal-inside.png.asset.json";
import galCollection from "@/assets/gal-collection.png.asset.json";
import wBras from "@/assets/w-bras.png.asset.json";
import wPanties from "@/assets/w-panties.png.asset.json";
import wChudidar from "@/assets/w-chudidar.png.asset.json";
import wGowns from "@/assets/w-gowns.png.asset.json";
import wPants from "@/assets/w-pants.png.asset.json";
import mBriefs from "@/assets/m-briefs.png.asset.json";
import mTrack from "@/assets/m-track.png.asset.json";
import mTshirts from "@/assets/m-tshirts.png.asset.json";
import kBriefs from "@/assets/k-briefs.png.asset.json";
import kNewborn from "@/assets/k-newborn.png.asset.json";
import kCasual from "@/assets/k-casual.png.asset.json";

export const logoUrl = logo.url;

export const store = {
  name: "Shree Exclusive Store",
  phone: "091081 60194",
  phoneHref: "tel:+919108160194",
  whatsapp: "https://wa.me/919108160194",
  instagram: "https://www.instagram.com/storeshreeexclusive/",
  email: "shreeexclusive5@gmail.com",
  maps: "https://maps.app.goo.gl/EpjEjxiMK9kWShETA",
  mapsEmbed:
    "https://www.google.com/maps?q=Shree+exclusive+store+Belaku+Arcade+8th+Main+Cross+Rd+Basaveshwar+Nagar+Bengaluru+560079&output=embed",
  address:
    "Belaku Arcade, 13, 8th Main Cross Rd, near Ayodhya Sagar Hotel, 3rd Stage 4th Block, Basaveshwar Nagar, Bengaluru, Karnataka 560079",
  hours: "Mon – Sun · 10:00 AM – 9:00 PM",
};

export const navLinks = [
  { label: "Home", hash: "#home" },
  { label: "Collections", hash: "#collections" },
  { label: "About Us", hash: "#about" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Reviews", hash: "#reviews" },
  { label: "Contact", hash: "#contact" },
];

export const brands = [
  "Enamor",
  "Amante",
  "Nykd by Nykaa",
  "Jockey",
  "Van Heusen",
  "Zivame",
];

export type CollectionItem = {
  title: string;
  description: string;
  image: string;
};

export type Collection = {
  slug: "men" | "women" | "kids";
  eyebrow: string;
  card: string;
  title: string;
  heading: string;
  subheading: string;
  tags: string[];
  items: CollectionItem[];
};

export const collections: Collection[] = [
  {
    slug: "men",
    eyebrow: "For Him",
    card: menCard.url,
    title: "Men's Section",
    heading: "Men's Section",
    subheading: "The Modern Gentleman",
    tags: ["Briefs", "Track Pants", "T-Shirts"],
    items: [
      {
        title: "Briefs",
        description:
          "Everyday briefs, trunks, and vests in breathable cotton from Jockey and Van Heusen.",
        image: mBriefs.url,
      },
      {
        title: "Track Pants",
        description:
          "Comfortable track pants and joggers for workouts, lounging, and everyday wear.",
        image: mTrack.url,
      },
      {
        title: "T-Shirts",
        description:
          "Cotton t-shirts for everyday wear — crew necks, polos, and essential basics.",
        image: mTshirts.url,
      },
    ],
  },
  {
    slug: "women",
    eyebrow: "For Her",
    card: womenCard.url,
    title: "Women's Section",
    heading: "Women's Section",
    subheading: "The Feminine Essence",
    tags: ["Bras", "Panties", "Chudidar's", "Gowns", "Pants"],
    items: [
      {
        title: "Bras",
        description:
          "Bras for every occasion — padded, non-padded, sports, t-shirt, and push-up in a range of sizes, from Enamor, Amante and Nykd by Nykaa.",
        image: wBras.url,
      },
      {
        title: "Panties",
        description:
          "Comfortable panties in briefs, hipsters, and boyshorts — cotton-rich and seamless options.",
        image: wPanties.url,
      },
      {
        title: "Chudidar's",
        description: "Traditional chudidar sets and bottoms for elegant ethnic wear.",
        image: wChudidar.url,
      },
      {
        title: "Gowns",
        description:
          "Elegant nightgowns, nighties, and nightwear sets for comfortable, stylish evenings.",
        image: wGowns.url,
      },
      {
        title: "Pants",
        description:
          "Leggings, athleisure, and lower-wear for everyday comfort and active wear.",
        image: wPants.url,
      },
    ],
  },
  {
    slug: "kids",
    eyebrow: "For Kids",
    card: kidsCard.url,
    title: "Kids Section",
    heading: "Kids Section",
    subheading: "The Little Ones",
    tags: ["Briefs", "New Born Accessories", "Casual Wear"],
    items: [
      {
        title: "Briefs",
        description:
          "Gentle, stretchy briefs designed for a comfortable fit on growing kids.",
        image: kBriefs.url,
      },
      {
        title: "New Born Accessories",
        description:
          "Soft, gentle clothing and essentials for newborns, plus handy accessories like socks, caps, and basics for little ones.",
        image: kNewborn.url,
      },
      {
        title: "Casual Wear",
        description:
          "Comfortable, stylish casual and party wear for everyday play and outings — tees, shorts, and easy-fit basics for active little ones.",
        image: kCasual.url,
      },
    ],
  },
];

export const aboutImage = aboutStore.url;

export const gallery = [
  { label: "Storefront", image: galStorefront.url, span: true },
  { label: "Inside the Store", image: galFestive.url, span: false },
  { label: "Our Collection", image: galInside.url, span: false },
  { label: "Store Entrance", image: galCollection.url, span: false },
];

export const reviews = [
  {
    name: "Devraj Sahoo",
    initial: "D",
    when: "10 months ago",
    text: "Beautiful store with a wide collection of premium innerwear. The quality is excellent, and the staff is super friendly. Located conveniently in Basaveshwar Nagar definitely worth a visit!",
    reply: "Tq",
    replyWhen: "2 weeks ago",
    isNew: false,
  },
  {
    name: "alok sukala",
    initial: "a",
    when: "10 months ago",
    text: "Absolutely loved my visit to Shree Exclusive Store! The collection is premium yet affordable, and the staff helped me find the perfect fit without any hassle.",
    reply: "Tq sir",
    replyWhen: "2 weeks ago",
    isNew: false,
  },
  {
    name: "Param Joshi",
    initial: "P",
    when: "2 weeks ago",
    text: "Worth a visit, best guidance for innerwear nightr wear with good quality",
    reply:
      "Thank u sir ...hope we continue our relationship with a lot more affection in our service",
    replyWhen: "2 weeks ago",
    isNew: true,
  },
];
