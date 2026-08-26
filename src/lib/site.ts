import newbornCard from "@/assets/newborn-card.jpg";

export const logoUrl = "/logo.png";

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
  "Clovia",
  "Sukanya",
];

export type CollectionItem = {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  brands?: string[];
};

export type Collection = {
  slug: "men" | "women" | "kids" | "newborn";
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
    card: "/3-24.jpeg",
    title: "Men's Section",
    heading: "Men's Section",
    subheading: "The Modern Gentleman",
    tags: ["Briefs", "Vests", "T-Shirts & Track Pants"],
    items: [
      {
        title: "Briefs",
        description:
          "Everyday briefs and trunks in breathable cotton from Jockey and Van Heusen.",
        images: ["/jockey briefs men.jpeg"],
        brands: ["Jockey", "Van Heusen"],
      },
      {
        title: "Vests",
        description:
          "Classic cotton vests — sleeveless and sleeved styles for everyday comfort.",
        images: ["/jocket vests men.jpeg"],
        brands: ["Jockey"],
      },
      {
        title: "T-Shirts & Track Pants",
        description:
          "Cotton t-shirts, polos, joggers, and track pants for everyday wear, workouts, and lounging.",
        images: ["/tshirts.jpeg", "/tracks main jockey.jpeg"],
        brands: ["Jockey", "Van Heusen"],
      },
    ],
  },
  {
    slug: "women",
    eyebrow: "For Her",
    card: "/4-24.jpeg",
    title: "Women's Section",
    heading: "Women's Section",
    subheading: "The Feminine Essence",
    tags: [
      "Bras",
      "Panties",
      "Chudidar's",
      "Gowns",
      "Pants",
      "Cord Sets",
      "Night Suits",
      "Bedroom Wear",
      "T-Shirts",
    ],
    items: [
      {
        title: "Bras",
        description:
          "Bras for every occasion — padded, non-padded, sports, t-shirt, and push-up in a range of sizes.",
        images: [
          "/bras amante.jpeg",
          "/bras enamore.jpeg",
          "/nykd by nyka womens.webp",
          "/bras-4th.jpeg",
        ],
        brands: ["Jockey", "Nykd by Nykaa", "Enamor", "Amante", "Zivame"],
      },
      {
        title: "Panties",
        description:
          "A wide choice of patterns, prints, and colours across every size — from everyday cotton to lace and seamless styles.",
        images: ["/briefs womens.jpg"],
      },
      {
        title: "Chudidar's",
        description: "Traditional chudidar sets and bottoms for elegant ethnic wear.",
        images: ["", ""],
      },
      {
        title: "Gowns",
        description: "Ethnic gowns for different purposes with many designs available.",
        images: ["/gown-1.webp", "/gown 2.webp", "/gown 3.webp", "/gown 4.webp"],
      },
      {
        title: "Pants",
        description:
          "Leggings, athleisure, and lower-wear for everyday comfort and active wear.",
        images: ["/womens pants -1.jpeg", "/womens pants -2.jpeg"],
      },
      {
        title: "Cord Sets",
        description:
          "Coordinated top-and-bottom cord sets in soft fabrics — easy, put-together everyday style.",
        images: ["", "", "", ""],
      },
      {
        title: "Night Suits",
        description: "Different styles, designs, and colours available in nighty's.",
        images: ["/night suits-1.jpeg", "/night suits-2.jpeg"],
      },
      {
        title: "Bedroom Wear",
        description:
          "Relaxed bedroom wear made for lounging at home — soft, breathable, and easy to wear.",
        images: ["/bedroom wear 1.jpeg", "/bedroom wear 2.jpeg"],
      },
      {
        title: "T-Shirts",
        description: "Everyday t-shirts in soft cotton — casual fits and easy basics.",
        images: ["", ""],
      },
    ],
  },
  {
    slug: "kids",
    eyebrow: "For Kids",
    card: "/5-24.jpeg",
    title: "Kids Section",
    heading: "Kids Section",
    subheading: "The Little Ones",
    tags: ["Briefs/Vests", "Ethnic Wear", "Casual Wear"],
    items: [
      {
        title: "Briefs/Vests",
        description:
          "Gentle, stretchy briefs and soft cotton vests designed for a comfortable fit on growing kids.",
      },
      {
        title: "Ethnic Wear",
        description:
          "Festive ethnic outfits for little ones — kurtas, sets, and traditional wear for every occasion.",
      },
      {
        title: "Casual Wear",
        description:
          "Comfortable, stylish casual and party wear for everyday play and outings — tees, shorts, and easy-fit basics.",
      },
    ],
  },
  {
    slug: "newborn",
    eyebrow: "For Newborns",
    card: newbornCard,
    title: "New Born Accessories",
    heading: "New Born Accessories",
    subheading: "The Tiniest Essentials",
    tags: [],
    items: [],
  },
];

export const aboutImage = "/17-24.png";

export const gallery = [
  { label: "Storefront", image: "/18-24.png" },
  { label: "Inside the Store", image: "/19-24.png" },
  { label: "Store Highlight", image: "/store highlight.jpeg" },
  { label: "Our Collection", image: "/20-24.png" },
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
