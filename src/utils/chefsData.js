import chef1 from "../assets/img/chefs/chefs-1.jpg";
import chef2 from "../assets/img/chefs/chefs-2.jpg";
import chef3 from "../assets/img/chefs/chefs-3.jpg";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const chefs = [
  {
    img: chef1,
    chefName: "chef1",
    chefPosition: "Master Chef",
    chefDetails:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    chefLinks: [
      {
        twitter: BsTwitter,
        facebook: BsFacebook,
        instagram: BsInstagram,
        linkedIn: BsLinkedin,
      },
    ],
  },
  {
    img: chef2,
    chefName: "chef2",
    chefPosition: "Patissier",
    chefDetails:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    chefLinks: [
      {
        twitter: BsTwitter,
        facebook: BsFacebook,
        instagram: BsInstagram,
        linkedIn: BsLinkedin,
      },
    ],
  },
  {
    img: chef3,
    chefName: "chef3",
    chefPosition: "Cook",
    chefDetails:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    chefLinks: [
      {
        twitter: BsTwitter,
        facebook: BsFacebook,
        instagram: BsInstagram,
        linkedIn: BsLinkedin,
      },
    ],
  },
];
