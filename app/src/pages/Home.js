import React, { Component } from 'react'
import ScrollCue from '../components/ScrollCue'
import {
  Hero,
  About,
  Schedule,
  Social,
  Gallery
} from '../components/Section'
import { Parallax } from 'react-parallax'
import Navigation from '../components/Navigation'

export default class extends Component {
    render() {
      const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }
      const background1 = {
        backgroundImage: `url(${require('../assets/banner1.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      const background2 = {
        backgroundImage: `url(${require('../assets/banner2.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      const background3 = {
        backgroundImage: `url(${require('../assets/banner3.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      const background4 = {
        backgroundImage: `url(${require('../assets/banner4.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
      return (
        <div>
          <section style={background3}>
            <Navigation/>
            <Hero />
            <ScrollCue text="See More" />
          </section>
          <Parallax bgImage={require('../assets/banner2.jpg')} strength={400} className="section">
            <About/>
          </Parallax>
          <section >
            <Schedule />
          </section>
          <section style={background4}>
            <ScrollCue text="See More" />
          </section>
        </div>
      )
  }
}
