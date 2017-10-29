import React, { Component } from 'react';
import './DetectLang.css';

class DetectLang extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      checked: true
    }

    this.getLang = this.getLang.bind(this);
    this.checkChange = this.checkChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.value !== this.props.value && this.state.checked) {
      this.getLang();
    }
  }

  checkChange() {
    this.setState({checked: !this.state.checked});
  }
  
  getLang() {
    if(this.props.value == false) {    
      return; 
    }

    let url = 'https://translate.yandex.net/api/v1.5/tr.json/detect?';
    const key = 'key=trnsl.1.1.20171020T125834Z.517d70436fa97187.57724776a2f614ff63fabb88af03dd1d9fe42c9a';
    let text = this.props.value;
    let hint = '&hint=ru,en,es,de';
    url +=  key + '&text=' + text + hint;    

    fetch(url)
      .then((response) => {
        if(response.status === 200)
          return response.json(); 
      })
      .then((data) => {         
        this.props.onDetectLang(data);       
      })
      .catch(alert)        
  }

  render() {  	
    return (   
      <div className="detect-lang">
        <input type="checkbox" checked={this.state.checked} onChange={this.checkChange}></input>
        <input type="button" value="Определить язык" onClick={this.getLang}></input>   
      </div>            
    );
  }

}

export default DetectLang;