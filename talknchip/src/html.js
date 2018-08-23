import React from "react"
import { siteMetadata } from "../gatsby-config"
let stylesStr
if (process.env.NODE_ENV === "production") {
  try {
    stylesStr = require("!raw-loader!../public/styles.css")
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let {
      title,
      description,
      favicon,
      keywords,
      ogTitle,
      ogType,
      url,
      ogImage,
      siteName
    } = siteMetadata
    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta property='og:url' content='https://talknchip.in.th' />
          <meta property='og:type' content='article' />
          <meta property='og:title' content='Let Talk n Chip' />
          <meta property='og:description' content='Share knowlage' />
          <meta property='og:image' content='https://talknchip.in.th/static/images/og.png' />

          <title>{title}</title>
          <meta name='description' content={description} />
          <link rel='icon' href={favicon} />
          <meta name='keywords' content={keywords} />
          <meta property='og:title' content={ogTitle} />
          <meta property='og:type' content={ogType} />
          <meta property='og:url' content={url} />
          <meta property='og:image' content={ogImage} />
          <meta property='og:site_name' content={siteName} />
          <link href='https://fonts.googleapis.com/css?family=Athiti:400,500,700' rel='stylesheet' />
          <link href='/static/css/bootstrap.min.css' rel='stylesheet' />
          <link href='/static/css/styles.css' rel='stylesheet' />
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAvI3rn-YqIVDbfpvCgHDitbbEy331d110' />
          {this.props.headComponents}
          {css}

        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={"body"}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
