import React, {Component} from "react";
import TodosList from "./TodosList.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "", total: 0};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.inputRef = React.createRef();
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: ""});
    this.inputRef.current.focus();
  }
  onChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
    <div className="form" onSubmit={this.onSubmit}>
      <form>
        <input type="text" ref={this.inputRef} onChange={this.onChange} value={this.state.value}/>
      </form>
      <button type="submit">Append</button>
    </div>

    );
  }
};
export default Form;
