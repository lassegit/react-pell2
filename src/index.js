import React, { Component } from 'react';
import pell from 'pell';
import PropTypes from 'prop-types';
import './style.css';

if (
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
) {
  window.pell = pell; // Expose Pell globally
}

export default class ReactPell extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = pell.init({
      element: this.editor,
      onChange: html => this.props.onChange(html),
      styleWithCSS: this.props.styleWithCSS,
      actions: this.props.actions,
      classes: this.props.classes
    });

    this.editor.content.innerHTML = this.props.content;
  }

  componentWillUnmount() {
    this.editor.destroy();
    this.editor = null;
  }

  getHTML() {
    return this.editor.content.innerHTML;
  }

  getText() {
    return this.editor.content.innerText;
  }

  render() {
    const { style } = this.props;
    return <div ref={e => (this.editor = e)} style={style} />;
  }
}

ReactPell.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  styleWithCSS: PropTypes.bool,
  actions: PropTypes.array,
  classes: PropTypes.object,
  style: PropTypes.object
};

ReactPell.defaultProps = {
  content: '',
  styleWithCSS: false,
  actions: [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'heading1',
    'heading2',
    'olist',
    'ulist',
    'quote',
    'code',
    'line'
  ],
  classes: {
    actionbar: 'pell-actionbar',
    button: 'pell-button',
    content: 'pell-content'
  }
};
