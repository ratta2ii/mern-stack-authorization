import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useStore } from "../../App/Stores/store";

const Dashboard = (props: any) => {
    const { userStore } = useStore();
    const { currentUser } = userStore;
    const [ currentUserId, setCurrentUserId ] = useState<string>();

    useEffect(() => {
        if (currentUser) setCurrentUserId(currentUser._id);
        return () => {
        }
    }, [currentUser])

    return (
        <Grid>
            <h1>Welcom to the Public Dashboard!</h1>
            <Button
                as={Link}
                to={`/dashboard/user/"${currentUserId}`}
                size="huge"
                inverted
                style={{ marginTop: 30 }}
            >
                Go to Private (Authorized) Dashboard
            </Button>
        </Grid>
    );
};

export default observer(Dashboard);
