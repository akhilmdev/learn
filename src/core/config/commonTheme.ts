import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

function CommonTheme() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: grey[900],
            },
            secondary: {
                main: grey[800],
            },

        },
        typography: {
            fontFamily: [
                'Heebo',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    });
    return theme;
}
export default CommonTheme;
