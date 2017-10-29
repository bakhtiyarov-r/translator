import React, { Component } from 'react';


class GetLangsList extends Component {  

  componentDidMount() {
    this.getLang();
  }  

  getLang() {
    let url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs?';
    const key = 'key=trnsl.1.1.20171020T125834Z.517d70436fa97187.57724776a2f614ff63fabb88af03dd1d9fe42c9a';
    let ui = '&ui=ru';
    url +=  key + ui;     

    fetch(url)
      .then((response) => {
        if(response.status === 200)
          return response.json(); 
      })
      .then((data) => {
        this.props.langsList(data);       
      })
      .catch(alert)        
  }

  render() {  	
    return (    	      
      <br/>               
    );
  }

}

export default GetLangsList;