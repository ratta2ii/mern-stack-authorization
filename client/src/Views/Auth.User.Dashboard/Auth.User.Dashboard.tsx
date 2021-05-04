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
