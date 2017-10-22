import React, { Component } from 'react'
import AmCharts from '@amcharts/amcharts3-react';
import 'ammap3/ammap/ammap.js';
import 'ammap3/ammap/maps/js/worldHigh.js';
import mapConfig from '../../Map/mapConfig'
import { csvToJson } from '../../../helpers.js'
import csv_2017 from '../../../assets/2017_results.csv'
// import FilterTable from '../../Table/filterableTable'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    console.log(csvToJson(csv_2017));
    this.setState({
      data: csvToJson(csv_2017)
    })
  }

  render() {
    return (
      <div>
        <AmCharts.React
          style={{
            width: "100%",
            height: "700px",
            backgroundColor: '#ccc'
          }}
        options={mapConfig} />
      </div>
    )
  }
}
