import {
  Home,
  Users,
  ShoppingBag,
  Image,
  Film,
  Monitor,

} from "react-feather";
export const MENUITEMS = [


 
  // {
  //   path: `${process.env.PUBLIC_URL}/app/task`,
  //   icon: CheckSquare,
  //   type: "link",
  //   title: "Task",
  // },
  
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
            path: `${process.env.PUBLIC_URL}/dashboard/`,
            title: "Default",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            title: "Ecommerce",
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
        path: `${process.env.PUBLIC_URL}/dashboard/default`,
        icon: Home,
        badge:"badge badge-primary",
        badgetxt: "Home",
        title: "Dashboard ",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/users/createShop`,
        icon: Monitor,
        badge: "badge badge-info",
        badgetxt: "Admin",
        title: "Create Shop ",
        type: "link",
      },
      {
        title: "Ecommerce",
        icon: ShoppingBag,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/createProduct`,
            title: "Create Product",
            type: "link",
          },
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
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
        ],
      },
      {
        title: "Users",
        icon: Users,
        path: `${process.env.PUBLIC_URL}/dashboard/userProfile`,
        type: "sub",
        bookmark: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/userProfile`,
            type: "link",
            title: "My profile",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/petProfile`,
            type: "link",
            title: "Pet Profile ",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/userEdit`,
            type: "link",
            title: "Users Edit",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/vetoList`,
            type: "link",
            title: "Vet List",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/vetCard`,
            type: "link",
            title: "Vet Card",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/petList`,
            type: "link",
            title: "Pet List ",
          },

          {
            path: `${process.env.PUBLIC_URL}/dashboard/createShop`,
            type: "link",
            title: "Create Shop ",
          },

          
          
          {
            path: `${process.env.PUBLIC_URL}/dashboard/createPet`,
            type: "link",
            title: "Create Pet ",
          },
        ],
      },
  
    ],
  },


  {
    menutitle: "Miscellaneous",
    menucontent: "Extras",
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
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageWithDesc`,
            title: "Gallery Grid  Desc ",
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
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogPost`,
            title: "Add Post",
            type: "link",
          },
        ],
      },
      
    
    ],
  },
];
