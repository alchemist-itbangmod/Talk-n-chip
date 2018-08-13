import React, { Fragment } from "react"
import HeroSection from "./HeroSection"
import MainSession from "./MainSession"
import SectionSubmid from "./SectionSubmidTopic"
import Schedule from "./Schedule"

export default () => (
  <Fragment>
    <HeroSection />
    <MainSession />
    <Schedule />
    <SectionSubmid />
  </Fragment>
)
