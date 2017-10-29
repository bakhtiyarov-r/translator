import React, { Component } from 'react';
import GetLangsList from './GetLangsList';
import './ChangeLang.css';


class ChangeLang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langList: null
    };
    
    this.langChange = this.langChange.bind(this);
    this.getLangsList = this.getLangsList.bind(this)
  }

  langChange(e) {    
    this.props.onLangChange(e.target.value);     
  }

  getLangsList(data) {
    let langsListArr = [];
    for (let key in data.langs) {
      langsListArr.push(<option key={key} value={key}>{data.langs[key]}</option>);             
    }  
    this.setState({langList: langsListArr});    
  }
 

  render() {
    return (
      <div className="change-lang">        
        <select  name="lang" value={this.props.langValue}  onChange={this.langChange}>
          <option disabled>Выберите язык</option>
          {this.state.langList}
        </select>
        <GetLangsList langsList={this.getLangsList}/>    
      </div>  
    );
  }
}

export default ChangeLang;