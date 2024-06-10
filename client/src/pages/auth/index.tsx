import {SignInButton, 
    SignUpButton, 
    SignOutButton, 
    SignedIn, 
    SignedOut, 
    SignUp, 
    SignIn, 
    UserButton} from '@clerk/clerk-react'

function Auth() {

  return (
    <div className="sign-in-container">
        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  )
}

export default Auth;
