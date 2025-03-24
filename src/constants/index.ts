import shoe4 from "../assets/images/shoe4.svg"
import shoe5 from "../assets/images/shoe5.svg"
import shoe6 from "../assets/images/shoe6.svg"
import shoe7 from "../assets/images/shoe7.svg"


interface NavItem{
    label: string,
    href: string,
}
interface Product {
    id: number;
    name: string;
    brand: string;
    gender: string;
    category: string;
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
    featured: number;
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
export const URL:Product[]=



[
  {
    id: 1,
    name: "Nike React Infinity Run Flyknit",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 160,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    slug: "nike-react-infinity-run-flyknit",
    featured: 0
  },
  {
    id: 2,
    name: "Nike React Miler",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 130,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
    slug: "nike-react-miler",
    featured: 1
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus 37",
    brand: "NIKE",
    gender: "WOMEN",
    category: "RUNNING",
    price: 120,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
    slug: "nike-air-zoom-pegasus-37",
    featured: 0
  },
  {
    id: 4,
    name: "Nike Joyride Run Flyknit",
    brand: "NIKE",
    gender: "WOMEN",
    category: "RUNNING",
    price: 180,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
    slug: "nike-joyride-run-flyknit",
    featured: 0
  },
  {
    id: 5,
    name: "Nike Mercurial Vapor 13 Elite FG",
    brand: "NIKE",
    gender: "WOMEN",
    category: "FOOTBALL",
    price: 250,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
    slug: "nike-mercurial-vapor-13-elite-fg",
    featured: 0
  },
  {
    id: 6,
    name: "Nike Phantom Vision Elite Dynamic Fit FG",
    brand: "NIKE",
    gender: "WOMEN",
    category: "FOOTBALL",
    price: 150,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
    slug: "nike-phantom-vision-elite-dynamic-fit-fg",
    featured: 0
  },
  {
    id: 7,
    name: "Nike Phantom Venom Academy FG",
    brand: "NIKE",
    gender: "WOMEN",
    category: "FOOTBALL",
    price: 80,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
    slug: "nike-phantom-venom-academy-fg",
    featured: 0
  },
  {
    id: 8,
    name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
    brand: "NIKE",
    gender: "MEN",
    category: "FOOTBALL",
    price: 145,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
    slug: "nike-mercurial-vapor-13-elite-tech-craft-fg",
    featured: 0
  },
  {
    id: 9,
    name: "Nike Mercurial Superfly 7 Pro MDS FG",
    brand: "NIKE",
    gender: "MEN",
    category: "FOOTBALL",
    price: 137,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
    slug: "nike-mercurial-superfly-7-pro-mds-fg",
    featured: 0
  },
  {
    id: 10,
    name: "Nike Air Force 1",
    brand: "NIKE",
    gender: "KIDS",
    category: "CASUAL",
    price: 90,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
    slug: "nike-air-force-1",
    featured: 0
  },
  {
    id: 11,
    name: "Nike Air Max 90",
    brand: "NIKE",
    gender: "KIDS",
    category: "CASUAL",
    price: 100,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
    slug: "nike-air-max-90",
    featured: 0
  },
 
]

export const staticPhotos=[

   { 
    id:1,
    imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_709,c_limit/cf9b1d53-1fb5-4355-b2b8-ca0437c053e4/nike-just-do-it.png',
    head:'Air Max Dn8',
},{
id:2,
imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_709,c_limit/28bb01bb-991e-4fc3-92e2-85f4916e29b8/nike-just-do-it.jpg',
head:'Air Max Dn',
},
{
id: 3,
imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_709,c_limit/d3302631-9f44-435d-9b5b-10d7ea8604da/image.jpg',
head:'Air Max LV8'
},
{
id:4,
imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_709,c_limit/8c344c56-9fe7-4d83-ba29-be95a9fbae95/image.png',
head:'Kids Air Max'
},
{
id:5,
imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_709,c_limit/9f24d90f-6f2a-416b-8ed1-e56d6d0a72d4/image.jpg',
head:'Air Max Plus'
},


]
export const URL2=
[ {
    id: 12,
    name: "Nike Air Max 90 LTR",
    brand: "NIKE",
    gender: "KIDS",
    category: "CASUAL",
    price: 110,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
    slug: "nike-air-max-90-ltr",
    featured: 0
  },
  {
    id: 13,
    name: "Nike Joyride Dual Run",
    brand: "NIKE",
    gender: "KIDS",
    category: "RUNNING",
    price: 110,
    is_in_inventory: false,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
    slug: "nike-joyride-dual-run",
    featured: 0
  },
  {
    id: 14,
    name: "Nike Renew Run",
    brand: "NIKE",
    gender: "KIDS",
    category: "RUNNING",
    price: 80,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
    slug: "nike-renew-run",
    featured: 0
  },
  {
    id: 15,
    name: "Beck",
    brand: "HUSHPUPPIES",
    gender: "MEN",
    category: "FORMAL",
    price: 80,
    is_in_inventory: true,
    items_left: 5,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_800x800.jpg",
    slug: "beck",
    featured: 0
  },
  {
    id: 16,
    name: "Bridgport Advice",
    brand: "HUSHPUPPIES",
    gender: "MEN",
    category: "FORMAL",
    price: 30,
    is_in_inventory: true,
    items_left: 4,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/BRIDGPORT_ADVICE-BLACK_1_800x800.jpg?v=1576567903",
    slug: "bridgport-advice",
    featured: 1
  },
  {
    id: 17,
    name: "Fester",
    brand: "HUSHPUPPIES",
    gender: "MEN",
    category: "FORMAL",
    price: 70,
    is_in_inventory: true,
    items_left: 6,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/fester-Tan_800x800.jpg?v=1575537531",
    slug: "fester",
    featured: 0
  },
  {
    id: 18,
    name: "Pixel",
    brand: "HUSHPUPPIES",
    gender: "MEN",
    category: "FORMAL",
    price: 75,
    is_in_inventory: true,
    items_left: 7,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/PIXEL-TAN_800x800.jpg?v=1577420506",
    slug: "pixel",
    featured: 0
  },
  {
    id: 19,
    name: "Austin",
    brand: "HUSHPUPPIES",
    gender: "MEN",
    category: "FORMAL",
    price: 75,
    is_in_inventory: true,
    items_left: 2,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988",
    slug: "austin",
    featured: 0
  },
  {
    id: 20,
    name: "SS-HL-0135",
    brand: "HUSHPUPPIES",
    gender: "WOMEN",
    category: "FORMAL",
    price: 30,
    is_in_inventory: true,
    items_left: 6,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",
    slug: "ss-hl-0135",
    featured: 0
  },
  {
    id: 21,
    name: "SS-HL-0136",
    brand: "HUSHPUPPIES",
    gender: "WOMEN",
    category: "FORMAL",
    price: 50,
    is_in_inventory: true,
    items_left: 4,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",
    slug: "ss-hl-0136",
    featured: 0
  },
  {
    id: 22,
    name: "SS-HL-0128",
    brand: "HUSHPUPPIES",
    gender: "WOMEN",
    category: "FORMAL",
    price: 35,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",
    slug: "ss-hl-0128",
    featured: 0
  },
  {
    id: 23,
    name: "SS-MS-0075",
    brand: "HUSHPUPPIES",
    gender: "WOMEN",
    category: "CASUAL",
    price: 25,
    is_in_inventory: true,
    items_left: 7,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",
    slug: "ss-ms-0075",
    featured: 0
  },
  {
    id: 25,
    name: "SS-PM-0093",
    brand: "HUSHPUPPIES",
    gender: "WOMEN",
    category: "CASUAL",
    price: 30,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",
    slug: "ss-pm-0093",
    featured: 0
  },
  {
    id: 26,
    name: "Nizza X Disney",
    brand: "ADIDAS",
    gender: "KIDS",
    category: "CASUAL",
    price: 55,
    is_in_inventory: true,
    items_left: 6,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
    slug: "nizza-x-disney",
    featured: 0
  },
  {
    id: 27,
    name: "X_PLR",
    brand: "ADIDAS",
    gender: "KIDS",
    category: "CASUAL",
    price: 65,
    is_in_inventory: true,
    items_left: 5,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
    slug: "x_plr",
    featured: 1
  },
  {
    id: 28,
    name: "Stan Smith",
    brand: "ADIDAS",
    gender: "KIDS",
    category: "CASUAL",
    price: 55,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
    slug: "stan-smith",
    featured: 0
  },
  {
    id: 29,
    name: "NMD_R1",
    brand: "ADIDAS",
    gender: "KIDS",
    category: "RUNNING",
    price: 120,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
    slug: "nmd_r1",
    featured: 0
  },
  {
    id: 30,
    name: "NMD_R1 Flash Red",
    brand: "ADIDAS",
    gender: "WOMEN",
    category: "CASUAL",
    price: 140,
    is_in_inventory: true,
    items_left: 5,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
    slug: "nmd_r1-flash-red",
    featured: 0
  },
  {
    id: 31,
    name: "Superstar",
    brand: "ADIDAS",
    gender: "WOMEN",
    category: "CASUAL",
    price: 90,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
    slug: "superstar",
    featured: 0
  },
  {
    id: 32,
    name: "Club C Revenge Mens",
    brand: "Reebok",
    gender: "MEN",
    category: "CASUAL",
    price: 70,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",
    slug: "club-c-revenge-mens",
    featured: 0
  },
  {
    id: 33,
    name: "SK80-Low",
    brand: "Vans",
    gender: "MEN",
    category: "CASUAL",
    price: 60,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
    slug: "sk80-low",
    featured: 0
  },
  {
    id: 34,
    name: "Michael Feburary SK8-Hi",
    brand: "Vans",
    gender: "MEN",
    category: "CASUAL",
    price: 72,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",
    slug: "michael-feburary-sk8-hi",
    featured: 0
  }]
export const webPhotos=[
  
   { imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1824,c_limit/e9779a50-cb65-4bcc-97e5-1248c219b7c4/nike-just-do-it.jpg'

   },
   {
    imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1824,c_limit/ce05cda5-e2b5-434a-a97b-695fb05c8b4d/nike-just-do-it.jpg'
},
]

export const staticShoes=[
    {   id:1,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/c05dfab5-2d0e-48e3-8ca0-f04c21ccee2c/nike-just-do-it.png'
    },
    {   id:2,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/c6ce0b87-cc23-4113-9d19-48248900eb0c/nike-just-do-it.png'
    },
    {   id:3,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/9a1898f3-e10d-4df8-b2cf-e2b0735f7742/nike-just-do-it.png'
    },
    {   id:4,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/1892aab6-5b81-422f-b7e5-d5072294a299/nike-just-do-it.png'
    },
    {   id:5,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/8568c73b-a0b5-47e0-a9bc-409353e7272e/nike-just-do-it.png'
    },
    {   id:6,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/2ea8fe0a-b92c-4eb0-8ae5-b80ffc95a7d2/nike-just-do-it.png'
    },
    {   id:7,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/f520c30b-5385-4f77-bdc3-40d4878d0d55/nike-just-do-it.png'
    },
    {   id:8,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/b9c593b6-f789-4459-abb3-4708eb84d047/nike-just-do-it.png'
    },
    {   id:9,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/6e80dada-0014-441d-9d0e-986b36f1d817/nike-just-do-it.png'
    },
    {   id:10,
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_567,c_limit/65d6ceb7-1c9e-41fb-8acc-37eb1799e1b8/nike-just-do-it.png'
    }
]

export const SportImages=[
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/a3c971bc-bc0a-4c0c-8bdf-e807a3027e53/nike-just-do-it.jpg',
     buttonValue:'Running'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/e4695209-3f23-4a05-a9f9-d0edde31b653/nike-just-do-it.jpg',
        buttonValue:'Football'

    },  
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/38ed4b8e-9cfc-4e66-9ddd-02a52314eed9/nike-just-do-it.jpg',
        buttonValue:'Basketball'

    },  
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/e36a4a2b-4d3f-4d1c-bc75-d6057b7cec87/nike-just-do-it.jpg',
        buttonValue:'Training and Gym'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/7ce96f81-bf80-45b9-918e-f2534f14015d/nike-just-do-it.jpg',
        buttonValue:'Tennis'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/6be55ac6-0243-42d6-87d0-a650074c658c/nike-just-do-it.jpg',
        buttonValue:'Yoga'
        

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/608705dc-dea5-4450-b68f-e624cf1ed2a7/nike-just-do-it.jpg'
           ,buttonValue:"Skateboarding"
    },
    {
        imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_440,c_limit/c779e4f6-7d91-46c3-9282-39155e0819e5/nike-just-do-it.jpg'
        ,buttonValue:'Dancing'}
  
    
]

export const MemberBenefits=[
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg',
     description:'Your Exclusive Access',
        buttonValue:'Running'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png',
        description:'Your Customization Service',
        buttonValue:'Shop'

    },  
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/39412611-0af5-4770-8c2e-ef5c23bc6a3d/nike-just-do-it.jpg',
        description:'How We Say Thank You',
        buttonValue:'Customize'

    },  
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png',
        description:'A Celebration Of You',
        buttonValue:'Learn More'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg',
        description:'Movement Where You are',
        buttonValue:'Move'

    },
    {imageUrl:'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_443,c_limit/c17ae904-9307-4575-8ac1-ad08adafe17f/nike-just-do-it.jpg',
        description:'Your Ulimate Sneaker Community',
        buttonValue:'Explore'
        

    },
 
]
