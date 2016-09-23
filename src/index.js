import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routes';
import './main.css';
import './post.css';
import 'highlight.js/styles/github.css';




render(<Routers/>,document.getElementById('root'));
