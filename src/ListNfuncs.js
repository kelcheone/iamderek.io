import {FaHtml5, FaCss3, FaJs, FaReact, FaPython} from 'react-icons/fa';
import {FaPhoneAlt, FaWhatsapp, FaTwitter, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';


const stack = [
    {icon: <FaHtml5 />, href: null},
    {icon: <FaCss3 />, href: null},
    {icon: <FaJs />, href: null},
    {icon: <FaReact />, href: null},
    {icon: <FaPython />, href: null}
]

const contacts = [
    {icon: <FaPhoneAlt />, href: "tel:+254770349697"},
    {icon: <FaWhatsapp />, href: "https://wa.me/254770349697"},
    {icon: <MdEmail />, href: "mailto:pesaderek1738@email.com"},
    {icon: <FaTwitter />, href: "https://twitter.com/itStillDerek"},
    {icon: <FaGithub />, href: "https://github.com/PessahDerek"}
]

export {stack, contacts};
