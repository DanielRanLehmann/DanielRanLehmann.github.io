import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import showdown from 'showdown';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';

// supported themes
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir'
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/terminal';

// examples
var mdExample01 = require('./assets/example_01.md')
console.log(mdExample01);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: mdExample01,
      selectedTheme: "github"
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectTheme = this.handleSelectTheme.bind(this);
  }

  componentDidMount() {
  }

  handleTextChange(text) {
    this.setState({
      text: text
    })
  }

  handleSelectTheme(e) {
    var target = e.target;
    var theme = target.text;
    this.setState({
      selectedTheme: theme
    })
  }

  render() {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(this.state.text);
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light border-bottom">
          <span className="navbar-brand mb-0 h1">Sclerose Info</span>
          <button className="btn btn-primary my-2 my-sm-0 dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Præferencer</button>
          <div className="dropdown-menu">
            <h6 className="dropdown-header">Temaer</h6>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>monokai</a>
            <a className="dropdown-item active" onClick={this.handleSelectTheme}>github</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>tomorrow</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>kuroir</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>twilight</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>xcode</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>textmate</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>solarized dark</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>solarized light</a>
            <a className="dropdown-item" onClick={this.handleSelectTheme}>terminal</a>
          </div>
          <button className="btn btn-success my-2 my-sm-0" type="submit">Publicér</button>
        </nav>
        <div style={{"height": "100vh"}} className="row">
          <div className="col-6 border-right h-100 d-inline-block">
            <AceEditor
                className="p-4 w-100 h-100"
                mode="markdown"
                theme={this.state.selectedTheme}
                onChange={this.handleTextChange}
                name="text-editor"
                editorProps={{$blockScrolling: true}}
                value={this.state.text}
              />
          </div>
          <div className="col-6">
            <div className="text-left" dangerouslySetInnerHTML={{__html: html}} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
