import LoginForm from "../components/loginForm";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h1>Authentication Page</h1>
      <p>Please log in or sign up to continue.</p>
      <div className="auth-forms">
        <LoginForm />
      </div>
    </div>
  );
}

export default AuthPage;
