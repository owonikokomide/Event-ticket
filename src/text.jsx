function Header() {
  return (
    <div>
      <div className="logo">
        <h1 className="event">Logo</h1>
      </div>
      <div className="sign">
        <div className="sign-up">
          <Link to="/signin">Sign in</Link>
        </div>
        <div className="sign-in">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
