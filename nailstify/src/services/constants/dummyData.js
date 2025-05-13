import { routes } from "."
import { appImages } from "../utilities"

export const Shapes= [
    {
        id:1,
        name:'Oral'
    },
    {
        id:2,
        name:'X-short'
    },
    {
        id:3,
        name:'Almond'
    },
    {
        id:4,
        name:'Short'
    },
    {
        id:5,
        name:'Square'
    },
    {
        id:6,
        name:'Medium'
    },
    {
        id:7,
        name:'Settlito'
    },
    {
        id:8,
        name:'Long'
    },
    {
        id:9,
        name:'Coffin'
    },
    {
        id:10,
        name:'Sculpped Long'
    },
]
export const Colors= [
    {
        id:1,
        name:'White'
    },
    {
        id:2,
        name:'Black'
    },
    {
        id:3,
        name:'Red'
    },
    {
        id:4,
        name:'Yellow'
    },
    {
        id:5,
        name:'Green'
    },
    {
        id:6,
        name:'Blue'
    },
    {
        id:7,
        name:'Nude'
    },
    {
        id:8,
        name:'Pink'
    },
    {
        id:9,
        name:'Orange'
    },
    {
        id:10,
        name:'purple'
    },
    {
        id:11,
        name:'White'
    },
    {
        id:12,
        name:'Black'
    },
    {
        id:13,
        name:'Red'
    },
    {
        id:14,
        name:'Yellow'
    },
    {
        id:15,
        name:'Green'
    },
    {
        id:16,
        name:'Blue'
    },
    {
        id:17,
        name:'Nude'
    },
    {
        id:18,
        name:'Pink'
    },
    {
        id:19,
        name:'Orange'
    },
    {
        id:20,
        name:'purple'
    },
    {
        id:21,
        name:'White'
    },
    {
        id:22,
        name:'Black'
    },
    {
        id:23,
        name:'Red'
    },
    {
        id:24,
        name:'Yellow'
    },
    {
        id:25,
        name:'Green'
    },
    {
        id:26,
        name:'Blue'
    },
    {
        id:27,
        name:'Nude'
    },
    {
        id:28,
        name:'Pink'
    },
    {
        id:29,
        name:'Orange'
    },
    {
        id:30,
        name:'purple'
    },
]
export const Likes= [
    {
        likeid:1,
        name:'Holographis'
    },
    {
        likeid:2,
        name:'Fall'
    },
    {
        likeid:3,
        name:'Ombre'
    },
    {
        likeid:4,
        name:'Glitter'
    },
    {
        likeid:5,
        name:'Bling'
    },
    {
        likeid:6,
        name:'Solid Color'
    },
    {
        likeid:7,
        name:'Snake Skin'
    },
    {
        likeid:8,
        name:'Cheetah'
    },
    {
        likeid:9,
        name:'Flower'
    },
    {
        likeid:10,
        name:'Swirel'
    },
    {
        likeid:11,
        name:'Holographic'
    },
    {
        likeid:12,
        name:'Swirel'
    },
    {
        likeid:13,
        name:'Red'
    },
    {
        likeid:14,
        name:'Swirel'
    },
    {
        likeid:15,
        name:'Green'
    },
    {
        likeid:16,
        name:'Blue'
    },
    {
        likeid:17,
        name:'Nude'
    },
    {
        likeid:18,
        name:'Pink'
    },
    {
        likeid:19,
        name:'Orange'
    },
    {
        likeid:20,
        name:'purple'
    },
    {
        likeid:21,
        name:'White'
    },
    {
        likeid:22,
        name:'Black'
    },

]
export const recomendProd= [
    {
        id:1,
        name:'Solde White',
        image:appImages.product1,
        rate:'800'
    },
    {
        id:2,
        name:'Solde White',
        image:appImages.product2,
        rate:'800'
    },
    {
        id:3,
        name:'Solde White',
        image:appImages.product3,
        rate:'800'
    },
    {
        id:4,
        name:'Solde White',
        image:appImages.product4,
        rate:'800'
    },
    {
        id:5,
        name:'Solde White',
        image:appImages.product3,
        rate:'800'
    },
    {
        id:6,
        name:'Solde White',
        image:appImages.product6,
        rate:'800'
    },
    {
        id:7,
        name:'Solde White',
        image:appImages.product2,
        rate:'800'
    },
    {
        name:'Solde White',
        image:appImages.product1,
        rate:'800'
    }
]
export const products=[
        {
            productId:1,
            name:'Solde White',
            image:appImages.product2,
            shapes:'Medium Coffin',
            rate:800,
            finish:"Matte"
        },   
        {
            productId:2,
            name:'Solde White',
            image:appImages.product1,
            shapes:'Medium Coffin',
            rate:800,
            finish:"Matte"
        },
]
export const OrderSummarylist= [
    {
        total:'Subtotal',
        rate:'1,600',
        condition:"Taxe and shipping charges will be calculated at checkout"
    }
]
export const StoriesData=[
    {
        storyid:1,
        name:"Solide White",
        image:appImages.story1,
    },
    {
        storyid:2,
        name:"Solide White",
        image:appImages.story2,
    },
    {
        storyid:3,
        name:"Solide White",
        image:appImages.story3,
    },
    {
        storyid:4,
        name:"Solide White",
        image:appImages.story4,
    },
    {
        storyid:5,
        name:"Solide White",
        image:appImages.story3,
    }
]
export const adOneData=
    {
        adid:1,
        image:appImages.adtwo,
        title:'Get Measured',
        description:'Use our innovative nail meaurement software to get your perfect size'
    }
    export const adSecondData=
    {
        id:1,
        image:appImages.adtwo,
        title:'Get Measured',
        description:'Your one-stop Destination for buying press-on nail art'
    }
    export const CartheaderData=[
     'Cart',
     'Information',
     'Shipping',
     'Payment'  
    ]
    export const ContactAndShipData= {
        email:"johndoe@email.com",
        address:'House #123, Street 123, F7/1',
        city:'Islamabad, ICT',
        country:"Pakistan"
    }
    export const Allproducts=[
        {
            productId:1,
            name:'Solde White',
            image:appImages.product2,
            description:'integer ac crum inumiplator nun porta simple lucos ',
            rate:800,
        },   
        {
            productId:2,
            name:'Solde White',
            image:appImages.product1,
            description:'integer ac crum inumiplator nun porta simplelucos',
            rate:800,
        }, 
        {
            productId:3,
            name:'Solde White',
            image:appImages.product2,
            description:'integer ac crum inumiplator nun porta simplelucos',
            rate:800,
            
        },   
        {
            productId:4,
            name:'Solde White',
            image:appImages.product1,
            description:'integer ac crum inumiplator nun porta simplelucos',
            rate:800,
        }, 
]
export const UserList = [
    {
        userid:1,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'Jane Doe'
    },
    {
        userid:2,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'Randel Doughtery Sr.'
    },
    {
        userid:3,
      image:appImages.user1  ,
      massg:"aki  ewwwwgg g theeu eeo o.",
      name:'Darneal hermi'
    },
    {
        userid:4,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'Randel Feral'
    },
    {
        userid:5,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'yongg farik'
    },
    {
        userid:6,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'jock  mii'
    },
    {
        userid:7,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'daghertry de'
    },
    {
        userid:8,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'kafi yuuuu'
    },
    {
        userid:9,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'immiuaaaw ee'
    },
    {
        userid:10,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'jane Doe'
    },
    {
        userid:11,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'jane Doe'
    },
    {
        userid:12,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'immiuaaaw ee'
    },
    {
        userid:13,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'jane Doe'
    },
    {
        userid:14,
      image:appImages.user1  ,
      massg:"Sit a delenti.",
      name:'jane Doe'
    }
]
export const UserProfileRecord= {
    image:appImages.profile,
    name:"Jane Doe",
    email:'janedoe@email.com'

}
export const MyOrder=[
{
    id:1,
    title:"My Orders",
    screen:routes.myorder
}]
export const UserOptions=[
    {
        title:'My Shapes',
        screen:routes.shapes
    },
    {
       title:"My Colors",
       screen:routes.mycolors
    },{
        title:"Styles i Like",
        screen:routes.likestyle
    }
]
export const UserPrivacyoptions=[
    {
        title:'Change Password',
        screen:routes.changepassword
    },
    {
       title:"Privacy Policy",
       screen:routes.privacypolicy
    },{
        title:"Term of Service",
        screen:routes.termofservice
    },
    {
        title:'Logout',
        screen:routes.auth
    }
]
export const MyOrderDataList=[
    {
        id:1,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:2,
order:"Order # 12345",
item:"items",
date:'May 25, 2023'
    }, {
        id:3,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:4,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:5,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:6,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:7,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:8,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:9,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:10,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:11,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:12,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:13,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
    {
        id:14,
order:"Order # 1234567",
item:"2 items",
date:'May 25, 2023'
    },
]
export const ShapeList= [
    {
        item:"Square",
    },
    {
        item:"Oval",
    },
    {
        item:"Medium",
    },
    {
        item:"Almond",
    },
    {
        item:"Stileto",
    },
    {
        item:"Lipstick",
    },{
        item:"Flare",
    },
]
export const FinishData=[
    {
        item:'Matte'
    },
    {
        item:"Glossy"
    }
]
export const SorTByData=[
    {
        item:"Default",
    },
    {
        item:"Price: Low to Heigh"
    },
    {
        item:"Price: Heigh to Low"
    },
]
export const FilterData= [
    {
        item:"Shape"
    },
    {
        item:"Finish"
    }
]