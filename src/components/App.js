import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "",
      name2: "",
      answer: "",
    };
  }

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);

      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    let count = arr1.length + arr2.length;

    let flames = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];

    this.setState({
      answer: flames[count % 6],
    });
  };

  clearFields = () => {
    this.setState({
      name1: "",
      name2: "",
      answer: "",
    });
  };

  render() {
    return (
      <div id="main">
        <input
          type="text"
          data-testid="input1"
          name="name1"
          placeholder="Enter first name"
          value={this.state.name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
        />

        <input
          type="text"
          data-testid="input2"
          name="name2"
          placeholder="Enter second name"
          value={this.state.name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship Future
        </button>

        <button data-testid="clear" name="clear" onClick={this.clearFields}>
          Clear
        </button>

        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default App;
