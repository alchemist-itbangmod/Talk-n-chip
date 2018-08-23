import React, { Fragment } from "react"
import HeroSection from "./HeroSection"
import WhatSection from "./WhatSection"
import MainSession from "./MainSession"
import SectionSubmit from "./SectionSubmitTopic"
import Schedule from "./Schedule"
import Footer from "./Footer"
import Sponsor from "./Sponsor"
import NavBar from "../core/Navbar"

export default () => (
  <Fragment>
    <NavBar />
    <section id='home' name='home'>
      <HeroSection />
    </section>
    <section>
      <Sponsor />
    </section>
    <section id='what' name='what'>
      <WhatSection />
    </section>
    <section id='who' name='who'>
      <MainSession />
    </section>
    <section id='where' name='where'>
      <Schedule />
    </section>
    <section>
      <SectionSubmit />
    </section>
    <Footer />
  </Fragment>
)
