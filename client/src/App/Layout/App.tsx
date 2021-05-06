import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import HomePage from "../../Views/Homepage/Homepage";
import Dashboard from "../../Views/Dashboard/Dashboard";
import SignupNewUser from "../../Views/Signup.New.User/Signup.New.User";
import Login from "../../Views/Login/Login";
import AuthUserDashBoard from "../../Views/Auth.User.Dashboard/Auth.User.Dashboard";

function App() {
  //! Do not miss this if you are using the location.key
  // const location = useLocation();

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path={["/dashboard"]} component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignupNewUser} />
                <Route
                  exact
                  path="/dashboard/user/:id"
                  component={AuthUserDashBoard}
                />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default observer(App);

// import React, { Fragment } from "react";
// import { Container } from "semantic-ui-react";
// import NavBar from "./NavBar";
// import { observer } from "mobx-react-lite";
// import { Route, useLocation } from "react-router-dom";
// import HomePage from "../../Views/Homepage/Homepage";
// import Dashboard from "../../Views/Dashboard/Dashboard";
// import SignupNewUser from "../../Views/SignupNewUser/SignupNewUser";
// import Login from "../../Views/Login/Login";
// import AuthUserDashBoard from "../../Views/Auth.User.Dashboard/Auth.User.Dashboard";

// function App() {
//   //! Do not miss this if you are using the location.key
//   const location = useLocation();

//   return (
//     <Fragment>
//       <Route exact path="/" component={HomePage} />
//       <Route
//         path={"/(.+)"}
//         render={() => (
//           <Fragment>
//             <NavBar />
//             <Container style={{ marginTop: "7em" }}>
//               <Route exact path={["/dashboard"]} component={Dashboard} />
//               <Route key={location.key} path="/login" component={Login} />
//               <Route
//                 key={location.key + "1"}
//                 path="/signup"
//                 component={SignupNewUser}
//               />
//               <Route
//                 exact
//                 path="/dashboard/user/:id"
//                 component={AuthUserDashBoard}
//               />
//             </Container>
//           </Fragment>
//         )}
//       />
//     </Fragment>
//   );
// }

// export default observer(App);
