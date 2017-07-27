import React from 'react'
import ReactDom from 'react-dom'
import ReactPell from '../src/index';

const style = {
  color: '#000',
  background: '#f2f2f2',
  borderRadius: '5px',
  boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
  height: '300px',
};

const classes = {
  actionbar: 'custom-action-bar',
  button: 'custom-button',
  content: 'custom-content',
};

function change(html) {
  console.log('html from parent:', html)
}

ReactDom.render(
  <div>
    <p>You rendered the ReactPell editor:</p>
    <ReactPell
      content="<b><u><i>Initial content!</i></u></b>"
      onChange={change}
      // classes={classes}
      style={style}
    />
  </div>,
  document.getElementById('app')
)
