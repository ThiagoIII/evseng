import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const linkSources = [
    {
        href: process.env.NEXT_PUBLIC_wa,
        text: '(44) 98834-5099',
        icon: <WhatsAppIcon />,
        id: 0
    },
    [
        {
            href: process.env.NEXT_PUBLIC_face,
            text: null,
            icon: <FacebookIcon />,
            id: 1
        },
        {
            href: process.env.NEXT_PUBLIC_insta,
            text: null,
            icon: <InstagramIcon />,
            id: 2
        },
        {
            href: process.env.NEXT_PUBLIC_linkedin,
            text: null,
            icon: <LinkedInIcon />,
            id: 3
        }
    ]
]

export default linkSources
