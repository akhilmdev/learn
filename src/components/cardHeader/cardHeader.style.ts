import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),

            marginBottom: theme.spacing(1.5),

            fontSize: '22px',
        },
        span: {
            marginLeft: theme.spacing(1),
            fontWeight: 500,
        },
        iconButton: {
            marginLeft: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
            padding: 0,
        },
        toolBar: {
            display: 'flex',
            margin: 'auto 30px'
        },
        appBar: {
            height: '90px',
            backgroundColor: '#212121'
        },
        logo: {
            maxWidth: '40px',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            marginRight: '10px',
            borderRadius: '50%'
        }
    }),
);
