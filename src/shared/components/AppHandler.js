import React from "react";


export default class AppHandler extends React.Component {
  render() {

    return <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-6 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-6 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
      </div>
      <div className="row">
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
        <div className="col-md-2 echarts-graph" md="echarts-graph" style={{height:400+'px'}}/>
      </div>
    </div>;
  }
}
