import React from "react"
import logo from "../assets/img/unsolobcilogo2.png"
import logoBci from "../assets/img/logo-bci.png"
import Form from "../components/form"
import "./index.css"
import "./home.css"

export default function Home() {
  return (
    <section className="Home">
      <header className="Home__header">
        <img src={logo} alt="logo solo bci" className="logo" />
      </header>
      <main className="Home__principal">
        <figure className="logoBci__container">
          <img src={logoBci} alt="logo bci" className="logoBci" />
        </figure>
        <Form />
      </main>
    </section>
  )
}
