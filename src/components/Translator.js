import React, { Component } from 'react';
import ChangeLang from './ChangeLang'
import DetectLang from './DetectLang'
import './Translator.css';

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      outputText: '',
      lang: 'en',
      inputLang: 'ru'
    };

    this.translate = this.translate.bind(this);
    this.inputText = this.inputText.bind(this);
    this.outputText = this.outputText.bind(this); 
    this.langChange = this.langChange.bind(this);
    this.inputLangChange = this.inputLangChange.bind(this);
    this.detectedLang = this.detectedLang.bind(this);
  }

  inputText(e) {
    this.setState({value:  e.target.value}, () => {
      this.translate()
    });
  }

  outputText(data) {
    this.setState({outputText: data});
  }

  langChange(value) {
    if (this.state.inputLang === value) {
      this.setState({inputLang: this.state.lang});
    }
    this.setState({lang: value}, () => {
      this.translate()
    });    
  }  

  inputLangChange(value) {
    if (this.state.lang === value) {
      this.setState({lang: this.state.inputLang});
    }
    this.setState({inputLang: value}, () => {
      this.translate()
    });    
  }
  
  detectedLang(value) { 
    if (this.state.lang === value.lang) {
      this.setState({lang: this.state.inputLang});
    }   
    this.setState({inputLang: value.lang}, () => {
      this.translate()
    });    
  }  
 
  translate(e) {    
    if(this.state.value == false) {
      this.outputText('');
      return; 
    }

    let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
    const key = 'key=trnsl.1.1.20171020T125834Z.517d70436fa97187.57724776a2f614ff63fabb88af03dd1d9fe42c9a';
    let lang = '&lang=' + this.state.inputLang + '-' + this.state.lang;
    let text = this.state.value;
    url +=  key + '&text=' + text + lang;
    
    fetch(url)
      .then((response) => {
        if(response.status === 200)
          return response.json(); 
      })
      .then((data) => {
        this.outputText(data.text);  
      })
      .catch(alert)  
       
  }

  render() {
    return (
      <div className="Translator">
        <div className="Input-text">
          <div>
            <ChangeLang onLangChange={this.inputLangChange} langValue={this.state.inputLang}/>
            <DetectLang onDetectLang={this.detectedLang} value={this.state.value}/>
          </div>
          <form>
            <textarea autoFocus className="Input-text__area" onInput={this.inputText} autoCorrect="off" autoComplete="off" autoCapitalize="off"></textarea>
          </form>
        </div>
        <div className="Output-text">
          <div>
            <ChangeLang onLangChange={this.langChange} langValue={this.state.lang}/>
          </div>
          <div className="Output-text__container">
            <span >{this.state.outputText}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Translator;