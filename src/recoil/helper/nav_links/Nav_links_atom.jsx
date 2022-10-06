import { atom } from "recoil";

const Nav_links_atom = atom({
  key: "Nav_links_atom",
  default: [
    {
      name: "Industries",
      path: "#",
    },
    {
      name: "Capabilities",
      path: "#",
    },
    {
      name: "Expertise",
      path: "#",
    },
    {
      name: "About Us",
      path: "#",
    },
  ],
});

export { Nav_links_atom };
