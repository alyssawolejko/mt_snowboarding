import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

export default class extends Component {
  render() {
    return (
      <div className="about">
        <Paper className="about__content">
          <p>Mike Trapp is a national champion professional snowboarder who hails from Hyannis, MA on Cape Cod, Massachusetts. He finished 3rd overall on the NorAm Cup Tour standings and 7 podium finishes last season.  These are just a couple recent accomplishments out of 170 events in a career that started when he was only 11 years old. He competes in Parallel Slalom and Parallel Giant Slalom. </p>
          <p>Mike Trapp hopes to represent the United States in the 2018 Winter Olympics to be held in Pyeongchang, South Korea.  To attain that goal he must successfully compete against dozens of other qualified athletes with the same goals. Only a maximum of 2 athletes out the those who are qualified will be chosen to represent the United States in the 2018 Winter Olympics.</p>
          <p>Over the years, Mike Trapp has worked hard to attain this enviable position. To be chosen to represent the United States in the 2018 Olympics would truly be the honor of his lifetime and something Mike has worked toward for over 10 years.</p>
        </Paper>
      </div>
    )
  }
}
