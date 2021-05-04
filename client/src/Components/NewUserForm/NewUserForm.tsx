import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useStore } from "../../App/Stores/store";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import useStyles from "./NewUserFormStyles";

function NewUserForm(props: any) {
  const classes = useStyles();
  const history = useHistory();
  const { userStore } = useStore();
  const { createUser } = userStore;

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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let newUser = {
      ...loginCredentials,
      _id: uuid(),
    };

    createUser(newUser).then((response) => {
      history.push(`/dashboard/user/${newUser._id}`, { props: newUser });
    });
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p" style={{ fontSize: 10, margin: 10 }}>
          {props.formDescription}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            id="margin-normal"
            name="username"
            defaultValue={loginCredentials.username}
            className={classes.textField}
            helperText="Enter a Username"
            variant="filled"
            onChange={handleInput}
          />
          <TextField
            label="Password"
            id="margin-normal"
            name="password"
            defaultValue={loginCredentials.password}
            className={classes.textField}
            helperText="Choose a Password"
            variant="outlined"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={classes.button}
          >
            SignUp
          </Button>
        </form>
        <div
          style={{
            textAlign: "center",
            marginTop: 25,
          }}
        >
          <a href="/login">Already have an Account? Login HERE</a>
        </div>
      </Paper>
    </div>
  );
}

export default NewUserForm;
