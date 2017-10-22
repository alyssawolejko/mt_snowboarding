import React, { Component } from "react";
import matchSorter from 'match-sorter'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class FilterTable extends Component {
  constructor() {
    super();
    this.state = {
      data: this.props.data || {}
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={this.props.columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
