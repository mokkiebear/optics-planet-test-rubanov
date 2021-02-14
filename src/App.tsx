import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header";

import './styles/styles.scss';

const SignInForm = lazy(() => import("./components/sign-in-form/sign-in-form"));
const RegisterForm = lazy(
  () => import("./components/register-form/register-form")
);
const ForgotPasswordForm = lazy(
  () => import("./components/forgot-password-form/forgot-password-form")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Header />

        <Switch>
          <Route path="/signin" component={SignInForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/forgot-password" component={ForgotPasswordForm} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
