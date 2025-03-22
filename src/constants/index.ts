import shoe4 from "../assets/images/shoe4.svg"
import shoe5 from "../assets/images/shoe5.svg"
import shoe6 from "../assets/images/shoe6.svg"
import shoe7 from "../assets/images/shoe7.svg"


interface NavItem{
    label: string,
    href: string,
}
export const Navlinks:NavItem[]=[
    {
        label: 'New & Featured',
        href: '/',
    },
    {
        label: 'Man',
        href: '/man',
    },
    {
        label: 'Woman',
        href: '/women',
    },
    {
        label: 'Kids',
        href: '/kids',
    },
    {
        label: 'sale',
        href: '/sale',
    },
    {
        label: 'SNKRS',
        href: '/SNKRS',
    }
]

export const NavLinks01:NavItem[]=[
    {
        label:'Find a Store',
        href:'/findastore'
    }
    ,{
        label:'Help',
        href:'/helpandsupport'
    }
    ,{
        label:'Join Us',
        href:'/myaccount'
    },
    {
        label:'SignIn',
        href:'/signin'
    }
]
export const PhotoSrc=[
    {
image:shoe4
    }
    ,{
        image:shoe5
    }
    ,{
        image:shoe6
    }
    ,{
        image:shoe7
    }
]