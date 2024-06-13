import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import UserMenu from "./logged-menu.jsx";
import '/src/styles/login/login.css';

const LoginButton = () => {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    console.log("isAuthenticated", isAuthenticated);
    console.log("user", user);

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
                            onClick={() => loginWithRedirect()}
                        >Log In
                        </Button>
                    </div>
                }

                {isAuthenticated &&
                    <div className={'login-logged-user'}>
                        <UserMenu name={user.name} image={user.picture}/>
                    </div>
                }
            </div>
        </>
    );
};

export default LoginButton;