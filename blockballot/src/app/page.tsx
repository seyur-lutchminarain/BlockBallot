"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sampleFunc = () => {
    alert("clicked");
    console.log(email);
  };

  return (
    <div className="{pages.base}">
      <h1 className="{styles.dashboard}">Welcome to BlockBallot</h1>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Login
      </button>
      {/* <button type="button" onClick={() => router.push("/signup")}>
        Signup
      </button> */}
      <button type="button" onClick={sampleFunc}>
        Test
      </button>
    </div>
  );
}
