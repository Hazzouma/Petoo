import { Home, Users, ShoppingBag, Image, Film,

} from "react-feather";
export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboard",
        icon: Home,
        type: "sub",
        badge: "badge badge-success",
        badgetxt: "2",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Default",
            type: "link",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "Ecommerce",
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
            path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`,
            title: "Payment Detail",
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
        title: "Users",
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
            path: `${process.env.PUBLIC_URL}/app/users/vetoList`,
            type: "link",
            title: "Vet List",
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
          
          {
            path: `${process.env.PUBLIC_URL}/app/users/createPet`,
            type: "link",
            title: "Create Pet ",
          },
        ],
      },
    ],
  },



  {
    menutitle: "Miscellaneous",
    menucontent: "Bouns Pages & Apps",
    Items: [
      {
        title: "Gallery",
        icon: Image,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`,
            title: "Gallery Grid ",
            type: "link",
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
