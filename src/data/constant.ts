import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";

export const NAV_LINKS = [
  {
    label: "Catalog",
    my_booked: false,
  },
  {
    label: "My Booked",
    my_booked: true,
  },
];

export const TAGLINE =
  "Unlock Your Dream Home: Your Key to Seamless Real Estate Booking.";

export const APP_NAME = "Placebook";

export const FOOTER_DATA = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    icon: CiFacebook,
  },
  {
    icon: CiTwitter,
  },
  {
    icon: CiYoutube,
  },
];
