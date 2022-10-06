import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7e4d72',
            dark: '#662054'
        },
        secondary: {
            main: '#569998',
            dark: '#396665'
        },
        text: {
            primary: '#F52273',
            secondary: '#6c6767',
        },
    },
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 color: '#FFF',
    //                 backgroundColor: '#7e4d72',
    //                 textTransform: 'none',
    //                 fontWeight: 'bold',
    //                 paddingTop: '12px',
    //                 paddingBottom: '12px',
    //                 ":hover": {
    //                     backgroundColor: '#662054',
    //                 }

    //             },
    //         },
    //     },
    //     MuiTextField: {
    //         defaultProps: {
    //             InputLabelProps: {
    //                 required: false,
    //             },
    //             required: true,
    //         },
    //     },
    // },
});

export default theme;