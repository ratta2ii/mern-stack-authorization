import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import useStyles from "./LoginFormStyles";
import { useStore } from "../../App/Stores/store";

interface Props {
  formName: string;
  formDescription: string;
}

const LoginForm = ({ formName, formDescription }: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const { userStore } = useStore();
  const { loadUser } = userStore;

  const [loginCredentials, setLoginCredentials] = useState<any>({
    _id: "",
    username: "",
    password: "",
  });

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    loadUser(loginCredentials).then((res) => {
      if (res) {
        console.log("I am the response in handleOnSubmit: ", res);
        history.push(`/dashboard/user/${res._id}`);
      } else {
        history.push("/login");
      }
    });
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {formName}
        </Typography>
        <Typography component="p" style={{ fontSize: 10, margin: 10 }}>
          {formDescription}
        </Typography>

        <form onSubmit={handleOnSubmit}>
          <TextField
            label="Username"
            placeholder="Enter your username"
            name="username"
            defaultValue={loginCredentials.username}
            onChange={handleInput}
            id="margin-normal"
            className={classes.textField}
            helperText="Enter your email"
            variant="filled"
          />
          <TextField
            label="Password"
            id="margin-normal"
            name="password"
            defaultValue={loginCredentials.password}
            className={classes.textField}
            helperText="Enter your Password"
            variant="outlined"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={classes.button}
          >
            Login
          </Button>
        </form>
        <div
          style={{
            textAlign: "center",
            marginTop: 25,
          }}
        >
          <a href="/signup">Sign up for New Account!</a>
        </div>
      </Paper>
    </div>
  );
};

export default LoginForm;
