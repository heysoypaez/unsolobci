import React from "react"
import logo from "../assets/img/unsolobcilogo2.png"
import logoBci from "../assets/img/logo-bci.png"
import Form from "../components/form"
import content from "../content"
import "./index.css"
import "./home.css"

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
const eventDateClassName =
  todaySantiago.getDate() === EVENT_DATE ? "eventdate" : ""

export default function Home() {
  return (
    <section className={`Home ${eventDateClassName}`}>
      <header className="Home__header">
        <img src={logo} alt="logo solo bci" className="logo" />
      </header>
      <main className="Home__principal">
        <figure className="logoBci__container">
          <img src={logoBci} alt="logo bci" className="logoBci" />
        </figure>
        {todaySantiago.getDate() === EVENT_DATE && (
          <section className="Home__eventdate">
            <p>{registered}</p>
            <a className="callToAction transmision" href="/transmision">
              {callToAction}
            </a>
            <p>{unregistered}</p>
          </section>
        )}
        <Form />
      </main>
    </section>
  )
}
