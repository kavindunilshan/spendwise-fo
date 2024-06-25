import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import UserMenu from "./logged-menu.jsx";
import '/src/styles/login/login.css';
import {createUser} from "../../services/dashboard.js";

const LoginButton = () => {
    const { isAuthenticated, user, loginWithPopup, loginWithRedirect} = useAuth0();
    const [loginAttempted, setLoginAttempted] = useState(false);

    console.log(user, loginAttempted);

    const handleClick = () => {
        loginWithPopup();
        setLoginAttempted(true);
    }

    if (isAuthenticated && loginAttempted) {
        const newUser = {
            name: user.name,
            email: user.email,
            userId: user.sub.split("|")[1],
        }
        createUser(newUser);
    }

    return (
        <>
            <div className={'login-panel'}>
                {!isAuthenticated &&
                    <div className={'login-anno-user'}>
                        <Button
                            style={{
                                color: '#320440',
                                boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
                                border: 'none',
                                borderRadius: 5,
                                padding: '0px 20px',
                                fontSize: '1rem',
                            }}
                            variant="outlined"
                            onClick={() => handleClick()}
                        >Log In
                        </Button>
                    </div>
                }

                {isAuthenticated &&
                    <div className={'login-logged-user'}>
                        <UserMenu/>
                    </div>
                }
            </div>
        </>
    );
};

export default LoginButton;