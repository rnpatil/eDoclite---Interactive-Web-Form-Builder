/**
 * Created by parikhv on 1/31/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug';
import Form from '../../app/components/Form';
import App from '../../app';

var attachElement = document.getElementById('form');

ReactDOM.render(<Form />, attachElement);
