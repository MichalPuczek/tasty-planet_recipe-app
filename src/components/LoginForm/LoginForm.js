
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Field from './Field/Field';
// import { useField } from './hooks';

import userContext from "../../context/User/UserContext";

import './LoginForm.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// COMPOSANT
const LoginForm = () => {

    const UserContext = useContext(userContext);
    const { email, password } = UserContext.loginData;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('je submit');
        UserContext.handleLogin();
    };

    return (
        <div className="login-form">
            {UserContext.isLogged && (
                <div className="login-form-logged">
                    <p className="login-form-message">
                        {UserContext.loggedMessage}
                    </p>
                    <button
                        type="button"
                        className="login-form-button"
                        onClick={UserContext.handleLogout}
                    >
                        Déconnexion
          </button>
                </div>
            )}
            {!UserContext.isLogged && (

                <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={UserContext.changeField}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                    />
                    <button
                        type="submit"
                        className="login-form-button"
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </form>
            )}
        </div>
    );
};

LoginForm.propTypes = {
    context: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        changeField: PropTypes.func.isRequired,
        handleLogin: PropTypes.func.isRequired,
        handleLogout: PropTypes.func.isRequired,
        isLogged: PropTypes.bool,
        loggedMessage: PropTypes.string,
    })
};

LoginForm.defaultProps = {
    isLogged: false,
    loggedMessage: 'Connecté',
};

export default LoginForm;