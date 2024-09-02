import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="signin-Container flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-white font-sans">Welcome to your own finance tracker App</h1>
      <SignedIn>
        <UserButton mode="modal" />
        <SignOutButton mode="modal"/>
      </SignedIn>
      <SignedOut>
       <div className="flex items-center gap-4">
       <SignInButton className="px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-slate-200 bg-slate-100" mode="modal" />
       <SignUpButton className="px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-slate-200 bg-slate-200" mode="modal" />
       </div>
      </SignedOut>
    </div>
  );
};
