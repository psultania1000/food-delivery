import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Creating state variable in a class based component
    this.state = {
      count: 0,
      count2: 5,
      count3: 3,
      count4: 2,
    };

    console.log(props);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/psultania1000");
    const json = await data.json();
    console.log(json);
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}>
          Visited
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: {this.props.contact}</h4>
      </div>
    );
  }
}

export default UserClass;
