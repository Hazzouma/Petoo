import { Home, Users, ShoppingBag, Image, Film, Command,

} from "react-feather";
export const MENUITEMS = [

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard/default`,
        icon: Home,
        badge:"badge badge-primary",
        badgetxt: "Home",
        title: "Dashboard ",
        type: "link",
      },
      {
        title: "Shop",
        icon: ShoppingBag,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product`,
            title: "Product",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`,
            title: "Product Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`,
            title: "Product List",
            type: "link",
          },
          
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
        ],
      },

      {
        path: `${process.env.PUBLIC_URL}/app/users/vetoList`,
        icon: Users,
        title: "Vet List ",
        type: "link",
      },
      
      {
        path: `${process.env.PUBLIC_URL}/app/users/createPet`,
        icon: Command,
        title: "Create a Pet ",
        type: "link",
      },

      {
        path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`,
        icon: Image,
        title: "Gallery Grid ",
        type: "link",
      },

      {
        title: "Users (to be deleted)",
        icon: Users,
        path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
        type: "sub",
        bookmark: true,
        active: false,
        children: [
          
          {
            path: `${process.env.PUBLIC_URL}/app/users/petProfile`,
            type: "link",
            title: "Pet Profile ",
          },
          
          {
            path: `${process.env.PUBLIC_URL}/app/users/vetCard`,
            type: "link",
            title: "Vet Card",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/petList`,
            type: "link",
            title: "Pet List ",
          },
          
          
        ],
      },
      {
        title: "Blog",
        icon: Film,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogDetail`,
            title: "Blog Details",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogSingle`,
            title: "Blog Single",
            type: "link",
          },
        
        ],
      },
    ],
  },



  
];
