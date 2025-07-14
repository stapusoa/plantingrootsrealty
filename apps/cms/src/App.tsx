import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="p-6">
        <h1 className="text-xl mb-4">CMS Login</h1>
        <button onClick={() => loginWithRedirect()} className="btn">Login</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl">Welcome, {user?.name}</h1>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
      <div className="mt-8">Your CMS dashboard goes here.</div>
    </div>
  );
}