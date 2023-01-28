import banking from "../assets/icon-online.svg";
import budgeting from "../assets/icon-budgeting.svg";
import onboarding from "../assets/icon-onboarding.svg";
import api from "../assets/icon-api.svg";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "careers",
    title: "Careers",
  },
];

const features = [
  {
    id: "banking",
    icon: banking,
    title: "Online Banking",
    paragraph:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: "budgeting",
    icon: budgeting,
    title: "Simple Budgeting",
    paragraph:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: "onboarding",
    icon: onboarding,
    title: "Fast Onboarding",
    paragraph:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: "api",
    icon: api,
    title: "Open API",
    paragraph:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const articles = [
  {
    id: "currency",
    image: currency,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    paragraph:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: "restaurant",
    image: restaurant,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    paragraph:
      " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: "plane",
    image: plane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    paragraph:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: "confetti",
    image: confetti,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    paragraph:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const footerFirst = [
  {
    id: "aboutUs",
    title: "About Us",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const footerSecond = [
  {
    id: "careers",
    title: "Careers",
  },
  {
    id: "support",
    title: "Support",
  },
  {
    id: "privacyPolicy",
    title: "Privacy Policy",
  },
];

export { navLinks, features, articles, footerFirst, footerSecond };
