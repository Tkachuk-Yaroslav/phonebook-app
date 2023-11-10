import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.backdrop}>
        <div className={css.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
