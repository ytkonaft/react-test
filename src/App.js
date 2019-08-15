import React, {PureComponent} from 'react';
import { subscribe, unSubscribe } from './services/socket.service';
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import './App.css';

class App extends PureComponent {
  state = {
    chartData: []
  }

  componentDidMount() {
    this.handleSubscribe();
  }

  componentWillUnmount() {
    unSubscribe()
  }

  handleSubscribe = () => {
    subscribe((data) => {
      this.setState({
        chartData: [...this.state.chartData, data]
      })
    })
  }

  render() {
    const {
      state: {
        chartData
      }
    } = this;
    return (
      <div className="App"> 
        <div className="left-chart">
          <LineChart data={chartData}/>
        </div>
        <div className="right-chart">
          <BarChart data={chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
