import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const linkSources = [
    {
        href: process.env.wa,
        text: '(44) 98834-5099',
        icon: <WhatsAppIcon />
    },
    {
        href: null,
        text: 'evsengenharia@outlook.com',
        icon: null
    },
    [
        {
            href: process.env.face,
            text: null,
            icon: <FacebookIcon />
        },
        {
            href: process.env.insta,
            text: null,
            icon: <InstagramIcon />
        },
        {
            href: process.env.linkedin,
            text: null,
            icon: <LinkedInIcon />
        }
    ]
]

export default linkSources
