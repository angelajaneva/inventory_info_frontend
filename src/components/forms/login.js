import React from 'react';
import {useHistory} from 'react-router-dom';
import * as authorization from '../../auth/auth'

import {useTranslation} from "react-i18next";

const AUTH_TOKEN = 'auth_token';


const LoginForm = (props) => {

    const history = useHistory();
    const [t] = useTranslation();

    const login = (e) => {
        e.preventDefault();

        const auth = {
            "username" :e.target.username.value,
            "password" :e.target.password.value
        };

        props.login(auth, (response)=>{

            localStorage.setItem(AUTH_TOKEN, response.data);
            localStorage.setItem("username", auth.username);

            authorization.login(response.data, auth.username);

            history.push("/");
        });
    };

    return (
    <form onSubmit={login}>
      <div>
        <input
          className="form-control"
          placeholder={t("Username")}
          name="username"
          type="text"
          required={true}
        />
      </div>
      <div>
        <input
          className="form-control"
          placeholder={t("Password")}
          name="password"
          type="password"
          required={true}
        />
      </div>
      <div className="text-left">
        <input name="remember"
    // component={CheckBoxField}
            type="checkbox"
    // checkboxClass="icheckbox_square-green"
    // increaseArea="20%"
    // cursor="pointer"
    // label="<span className='checkbox-label'> Remember Me </span>"
    />
          <span className='checkbox-label'>{t("Remember me")} </span>
      </div>
        <br/>
      <button type="submit"
              id="btnLogin"
              value={"Login"}
              className="btn btn-primary block full-width m-b">
        {/*// disabled={pristine || submitting || invalid}>*/}
        {/*//         Login*/}
          {t("Log in")}</button>
    </form>
  );
};

export default LoginForm
