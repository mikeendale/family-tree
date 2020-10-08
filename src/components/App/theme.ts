import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

export const darkTheme = responsiveFontSizes(createMuiTheme({
    // custom colors defined in types/theme
    treeColors: {
        linkStroke: "#7D82B8",
        parentFill: "#7D82B8",
        parentStroke: "#7D82B8",
    },
    palette: {
        type: "dark",
        primary: {
            main: "#303f9f", // dark blue
        },
        secondary: {
            main: "#7D82B8",
        },
        // background: {
        //     paper: "#03c0dc", // light blue
        //     default: "#272b4d", // navy blue
        // },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
}))

export const lightTheme = responsiveFontSizes(createMuiTheme({
    // custom colors defined in types/theme
    treeColors: {
        linkStroke: "#5D576B",
        parentFill: "#8884ff",
        parentStroke: "#8884ff",
    },
    palette: {
        type: "light",
        primary: {
            main: "#8884ff", 
        },
        secondary: {
            main: "#D7BCE8",
        },
        // background: {
        //     paper: "#E8CEE4", // light blue
        //     default: "#FDE2FF", // navy blue
        // },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
}))