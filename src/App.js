import React, { Component } from 'react';
import './App.css';
import DestinosLista from './Components/Destinos/DestinosLista';


const LIST_URL = 'http://localhost:8083/jsonapi/node/destinos';

  //jQuery(".cnt-letra").html().split("<br>")
  //document.getElementsByClassName('cnt-letra')[0].innerHTML.replace(new RegExp("</p><p>", 'g'), "<br>").split('<br>')
  //document.getElementsByClassName('cnt-letra')[0].innerHTML.replace(new RegExp("</p><p>", 'g'), "<br>").replace(new RegExp("<p>", 'g'), "").replace(new RegExp("</p>", 'g'), "").trim().split('<br>')
class App extends Component {
  
  state = {};
  loadDestinations() {
    // Fetch Destinations.
    fetch(LIST_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Destinations Failed', err));
  }
  updateData(responseData) {
    this.setState({data: responseData.data});
  }
  componentWillMount() {
    this.loadDestinations();
  }
  constructor() {
    super();
    this.state = { data: null };
    this.loadDestinations = this.loadDestinations.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <DestinosLista  data={this.state.data} />
      </div>
    );
  }
}

export default App;