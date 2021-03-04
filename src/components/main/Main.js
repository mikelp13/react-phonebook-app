import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import phonebookRoutes from "../../routes/phonebookRoutes";
import Loader from "../loader/Loader";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

const Main = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <Switch>
        {phonebookRoutes.map((route) => {
          return route.isPrivate ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          );
        })}
      </Switch>
    </Suspense>
  </main>
);

export default Main;
