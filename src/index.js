import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import pell from 'pell';
import PropTypes from 'prop-types';

export default class ReactPell extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = pell.init({
      element: ReactDOM.findDOMNode(this),
      onChange: (html) => { this.props.onChange ? this.props.onChange(html) : null; },
      styleWithCSS: this.props.styleWithCSS,
      actions: this.props.actions,
      classes: this.props.classes,
    });

    if (this.props.content) {
      this.editor.content.innerHTML = this.props.content;
    }
  }

  componentWillUnmount() {
    this.editor.destroy();
    this.editor = null;
  }

  render() {
    const { width, height, style } = this.props;
    const divStyle = { width, height, ...style };

    return (<div style={divStyle}></div>);
  }
}

ReactPell.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
  styleWithCSS: PropTypes.bool,
  actions: PropTypes.array,
  classes: PropTypes.object,
  style: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
};
