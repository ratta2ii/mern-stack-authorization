import React, { ChangeEvent, useState } from "react";
import { useStore } from "../../App/Stores/store";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import useStyles from "./Add.Password.Form.Styles";
import { observer } from "mobx-react-lite";

function AddPasswordForm(props: any) {
    const classes = useStyles();
    const { userStore } = useStore();
    const { createUser, currentUser } = userStore;

    const [loginCredentials, setLoginCredentials] = useState<any>({
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
        if (passwordAuthorized && currentUser) {
            let updatedUser = await {
                ...currentUser,
                password: loginCredentials.password,
            };
            
            createUser(updatedUser).then(() => {;
                props.setDisplayPasswordForm(false);
            });
        } else {
            alert("Your passwords do not match! Please reenter a different password.");
        }
    };

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    {props.formName}
                </Typography>
                <Typography component="p" style={{ fontSize: 12, margin: 10 }}>
                    {props.formDescription}
                </Typography>
                <form onSubmit={handleSubmit}>
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
                        Create
                    </Button>
                </form>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: 15,
                    }}
                >
                </div>
            </Paper>
        </div>
    );
}

export default observer(AddPasswordForm);