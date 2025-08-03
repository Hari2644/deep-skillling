import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: null,
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { rupees } = this.state;
    const euroRate = 0.011; // 1 INR = 0.011 Euro
    const euro = (rupees * euroRate).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter (INR to Euro)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter INR"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && <p>Converted Amount: €{this.state.euro}</p>}
      </div>
    );
  }
}

export default CurrencyConvertor;
