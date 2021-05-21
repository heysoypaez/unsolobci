import React from "react"
import logo from "../assets/img/unsolobcilogo2.png"
import logoBci from "../assets/img/logo-bci.png"
import Form from "../components/form"
import content from "../content"
import "./index.css"
import "./home.css"

console.log(".")

const {
  home: {
    event: { registered, unregistered, callToAction },
  },
} = content
const today = new Date().toLocaleString("en-US", {
  timeZone: "America/Santiago",
})
const todaySantiago = new Date(today)
const EVENT_DATE = 25 

export default function Home() {
  return (
    <section className="Home">
      <header className="Home__header">
        <img src={logo} alt="logo solo bci" className="logo" />
        {todaySantiago.getDate() === EVENT_DATE && (
          <section className="Home__eventdate">
            <p>{registered}</p>
            <input
              type="submit"
              value={callToAction}
              className="callToAction"
            />
            <p>{unregistered}</p>
          </section>
        )}
        <div></div>
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
