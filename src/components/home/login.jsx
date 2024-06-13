import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

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
                            onClick={() => loginWithRedirect()}
                        >Log In
                        </Button>
                    </div>
                }

                {isAuthenticated &&
                    <div className={'login-logged-user'}>
                        <Button
                            onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}
                        >Log Out
                        </Button>
                    </div>
                }
            </div>
        </>
    );
};

export default LoginButton;