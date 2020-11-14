// == Import : npm
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import userContext from "../../../context/User/UserContext";

// == Import : local
import './Field.css';

// == Composant
const Field = ({
    value,
    type,
    name,
    placeholder,
}) => {

    const UserContext = useContext(userContext);

    /*   const handleChange = (evt) => {
          onChange(evt.target.value, name);
      }; */

    const inputId = `field-${name}`;

    return (
        <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
            <input
                // React - state
                autoComplete="on"
                value={value}
                onChange={(e) => {
                    const { name, value } = e.target;
                    UserContext.changeField({
                        [name]: value,
                    })
                }}
                // infos de base
                id={inputId}
                type={type}
                className="field-input"
                placeholder={placeholder}
                name={name}
            />

            <label
                htmlFor={inputId}
                className="field-label"
            >
                {placeholder}
            </label>
        </div>
    );
};

Field.propTypes = {
    context: PropTypes.shape({
        value: PropTypes.string,
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    })
};

// Valeurs par défaut pour les props
Field.defaultProps = {
    value: '',
    type: 'text',
};

// == Export
export default Field;