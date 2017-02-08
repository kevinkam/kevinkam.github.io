import React from 'react';
import ReactDOM from 'react-dom'
import Translation from './components/Translation';
import Profile from './components/Profile';
import Education from './components/Education';
import Work from './components/Work';
import Skill from './components/Skill';
import Self from './components/Self';
import Download from './components/Download';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      language: 'us'
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage (language) {
    switch (language) {
      case 'us':
        document.title = 'Resume';
        break;
      case 'tw':
        document.title = '履歷表';
        break;
      case 'ch':
        document.title = '履历表';
        break;
    }
    this.setState({
      language: language
    });
  }
  render () {
    return (
      <div className="ui container">
        <div ref="segment" className="ui segment">
          <Translation language={this.state.language} changeLanguage={this.changeLanguage} />
          <Profile language={this.state.language} />
          <Education language={this.state.language} />
          <div className="ui divider"></div>
          <Skill language={this.state.language} />
          <div className="ui divider page-break"></div>
          <Self language={this.state.language} />
          <div className="ui divider page-break"></div>
          <Work language={this.state.language} />
          <Download language={this.state.language} />
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
