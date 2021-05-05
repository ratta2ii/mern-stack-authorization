import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import LoadingComponent from "../../App/Layout/LoadingComponent";
import { useStore } from "../../App/Stores/store";

const AuthUserDashBoard = (props: any) => {
    const { userStore } = useStore();
    const {
        loadUserById,
        loadingInitial,
        currentUser,
        isAuthenticated,
    } = userStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        loadUserById(id);
    }, [id, loadUserById]);

    // //* Loading Indicator
    if (loadingInitial && !currentUser && !isAuthenticated)
        return <LoadingComponent content="Loading app" />;
    // If a user signs in through OAuth (not "locally"), they will be asked to choose a password that can then be associated with that username and account returned by a sign-in provider. This will enable them to use "local" sign in with there username (email) and password in subsequent visits, or, any and all of the OAuth services while always being connected to the same account.
    else if (
        currentUser &&
        isAuthenticated &&
        currentUser.hasOwnProperty("accounts") &&
        !currentUser.localAccount
    ) {
        return (
            <div>
                <h1>
                    You are going to need to enter a new password for your existing
                    account. This will enable login with username and password, as well as
                    through the social provider of your choosing.
                </h1>
                <h1>And I will have to implement this for you!</h1>
            </div>
        );
    }

    return (
        <div>
            {currentUser && (
                <ul>
                    <li>
                        <h3>ID: {currentUser._id}</h3>
                    </li>
                    <li>
                        <h3>USERNAME: {currentUser.username}</h3>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default observer(AuthUserDashBoard);
