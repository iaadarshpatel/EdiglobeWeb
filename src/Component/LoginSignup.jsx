import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginSignup = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();
    return (
        <>
            {isAuthenticated
                ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</button>
                :
                <button onClick={() => loginWithRedirect()}>Log In</button>}
            {isAuthenticated
                ?
                <h2>Welcome to website</h2>
                :
                <h2>You're logged out!</h2>
            }
        </>
    )
}

export default LoginSignup