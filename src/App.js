import React, { PureComponent } from "react";
import { subscribe, unSubscribe } from "./services/socket.service";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import AlertThreshold from "./components/AlertThreshold";
import Alert from "./components/Alert";
import "./App.css";

class App extends PureComponent {
  state = {
    treshold: null,
    topValue: null,
    chartData: []
  };

  componentDidMount() {
    this.handleSubscribe();
  }

  componentWillUnmount() {
    unSubscribe();
  }

  handleSubscribe = () => {
    subscribe(data => {
      const { topValue, chartData } = this.state;
      let treshold = topValue;
      if (!topValue || data.value > topValue) {
        treshold = data.value;
      }
      this.setState({
        topValue: treshold,
        chartData: [...chartData, data]
      });
    });
  };
  setTreshold = value => {
    this.setState({ treshold: value });
  };
  render() {
    const {
      setTreshold,
      state: { chartData, treshold, topValue }
    } = this;

    const showAllert = treshold && treshold < topValue;
    return (
      <div className="App">
        <div className="input-wrp">
          <AlertThreshold onChange={setTreshold} />
        </div>
        <div className="charts-wrp">
          <div className="left-chart">
            <LineChart data={chartData} />
          </div>
          <div className="right-chart">
            <BarChart data={chartData} />
          </div>
        </div>
        {showAllert && <Alert message={`Threshold is reached: ${topValue}`} />}
      </div>
    );
  }
}

export default App;
