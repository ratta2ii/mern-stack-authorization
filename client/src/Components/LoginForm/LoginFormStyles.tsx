import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        height: 30,
        marginTop: 25,
    },
    leftIcon: {
        marginRight: theme.spacing(1)
    },
    rightIcon: {
        marginLeft: theme.spacing(1)
    },
    iconSmall: {
        fontSize: 20
    },
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: 350,
    },
    container: {
       // display: "flex",
       // flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    }
}));

export default useStyles;