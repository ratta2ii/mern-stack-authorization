import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import agent from "../../App/Api/agent";
import { useStore } from "../../App/Stores/store";
import { ToastContainer, toast } from "react-toastify";

const TestAuthButton = () => {
  const { userStore } = useStore();
  const { isAuthenticated } = userStore;

  useEffect(() => {}, [isAuthenticated]);

  const testAuthApi = async () => {
    return agent.Users.test("/test-route").then((res) => {
      if (res.message.includes("NOT")) {
      } else {
        toast("AUTHORIZED USER!");
        console.log(`%c ${res.message} `, "background: #222; color: #a0fcb6");
      }
    }).catch(err => {
      console.log(`%c You are not authorized for /test-route `, "background: #222; color: #fabcbc");
      console.log(err);
    })
  };

  return (
    <div style={{ marginTop: 30 }}>
      <Button
        onClick={testAuthApi}
        content="Test Authorization Endpoint"
        inverted
        style={{
          fontSize: "1.2rem",
          background: "black",
          color: "white"
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default observer(TestAuthButton);
