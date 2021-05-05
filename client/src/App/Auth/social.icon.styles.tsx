import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgStyles: {
    height: 40,
    marginTop: 5,
    marginLeft: 25,
    cursor: "pointer",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      opacity: ".85",
    },
  },
}));

export default useStyles;
