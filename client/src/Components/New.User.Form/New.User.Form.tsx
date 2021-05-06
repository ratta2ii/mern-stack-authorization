import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useStore } from "../../App/Stores/store";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import useStyles from "./New.User.Form.Styles";

function NewUserForm(props: any) {
    const classes = useStyles();
    const history = useHistory();
    const { userStore } = useStore();
    const { createUser, currentUser } = userStore;
    
    const [loginCredentials, setLoginCredentials] = useState<any>({
        _id: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleInput = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setLoginCredentials({ ...loginCredentials, [name]: value });
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const passwordAuthorized =
            loginCredentials.password === loginCredentials.confirmPassword;
        if (passwordAuthorized) {
            let newUser = await {
                ...loginCredentials,
                _id: uuid(),
            };
            await delete newUser[newUser.confirmPassword];

            createUser(newUser).then(() => {
                //! This will not work for when users enter info of already existing accounts. 
                //! This will need to throw an error and let a user know to try again or go to login
                history.push(`/dashboard/user/${newUser._id}`);
            })
        } else {
            alert("Your passwords do not match! Please reenter a different password.");
        }
    };

    return (
        <div>
            {currentUser}
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    {props.formName}
                </Typography>
                <Typography component="p" style={{ fontSize: 12, margin: 10 }}>
                    {props.formDescription}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        id="margin-normal"
                        name="username"
                        defaultValue={loginCredentials.username}
                        className={classes.textField}
                        helperText="Enter your email"
                        variant="filled"
                        onChange={handleInput}
                    />
                    <TextField
                        label="Password"
                        id="margin-normal"
                        name="password"
                        defaultValue={loginCredentials.password}
                        className={classes.textField}
                        // helperText="Choose a Password"
                        variant="outlined"
                        onChange={handleInput}
                    />
                    <TextField
                        label="Confirm Password"
                        id="margin-normal"
                        name="confirmPassword"
                        className={classes.textField}
                        defaultValue={loginCredentials.confirmPassword}
                        // helperText="Enter a Password"
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
                        marginTop: 15,
                    }}
                >
                    <a href="/login">Already have an Account? Login HERE</a>
                </div>
            </Paper>
        </div>
    );
}

export default NewUserForm;
