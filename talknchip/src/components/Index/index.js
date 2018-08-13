import React, { Fragment } from "react"
import HeroSection from "./HeroSection"
import WhatSection from "./WhatSection"
import MainSession from "./MainSession"
import SectionSubmit from "./SectionSubmitTopic"
import Schedule from "./Schedule"
import Footer from "./Footer"
import Sponsor from "./Sponsor"

export default () => (
  <Fragment>
    <HeroSection />
    <Sponsor />
    <WhatSection />
    <MainSession />
    <Schedule />
    <SectionSubmit />
    <Footer />
  </Fragment>
)
