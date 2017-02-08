import React from 'react';

class Translation extends React.Component {
  componentDidMount(){
    let me = this;
    $('.i18n .ui.dropdown').dropdown({
      onChange:(val) => {
        me.props.changeLanguage(val);
      }
    });
  }
  render () {
    return (
      <div className="i18n">
        <div className="ui right pointing dropdown">
          <div className="default text"><i className={this.props.language + " flag"}></i></div>
          <div className="menu">
            <div className="active selected item" data-value="us" data-text="<i class='us flag'></i>">
              <i className="us flag"></i> English
            </div>
            <div className="item" data-value="tw" data-text="<i class='tw flag'></i>">
              <i className="tw flag"></i> 繁體中文
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Translation;
