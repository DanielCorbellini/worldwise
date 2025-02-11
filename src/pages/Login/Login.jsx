import { useEffect, useState } from "react";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Login.module.css";
import { useAuth } from "../../context/FakeAuthContext/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@test.com");
  const [password, setPassword] = useState("12345");

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app");
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
