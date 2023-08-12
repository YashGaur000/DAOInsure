import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    fonts: {
      heading: "Lato",
      body: "Lato"
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "20px",
        }
      },
      Text: {
        baseStyle: {
          fontFamily: "Lato"
        }
      },
      Tag: {
        baseStyle: {
          borderRadius: "20px",
        },
        variants: {
          solid: {
            borderRadius: "20px",
          }
        }
      }
    },
    config: {
      initialColorMode: "dark", // Change to "dark" if you want dark mode to be the default
      useSystemColorMode: false, // Set to true to respect system color scheme
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("white", "gray.800")(props),
          color: mode("gray.800", "whiteAlpha.900")(props),
        },
      }),
    },
    colors: {
      light: {
        background: "#FFFFFF",
        text: "#000000",
      },
      dark: {
        background: "#1A202C",
        text: "#FFFFFF",
      },
    },
  });
  
  export default theme;
  







































// import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//     fonts: {
//         heading: "Lato",
//         body: "Lato"
//     },
//     components: {
//         Button: {
//             baseStyle: {
//                 fontFamily: "Lato",
//                 borderRadius: "20px",
//             }
//         },
//         Text: {
//             baseStyle: {
//                 fontFamily: "Lato"
//             }
//         },
//         Tag: {
//             baseStyle: {
//                 fontFamily: "Lato",
//                 borderRadius:"20px",
//                 backgroundColor:"rgba(12, 108, 51, .7)",
//                 color:"rgba(255, 255, 255, 1)"
//             },
//             variants: {
//                 solid: {
//                     fontFamily: "Lato",
//                     borderRadius:"20px",
//                     backgroundColor:"rgba(12, 108, 51, .7)",
//                     color:"rgba(255, 255, 255, 1)"
//                 }
//             }
//         }
//     }
    
// });

// export default theme;