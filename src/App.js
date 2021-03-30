import './App.css';

import "bulma";
import { Component } from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render() {

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (

      <div className="App">
        <div className="container">

          <h1 style={{'font-size': '64px'}}>Monster Rolodex</h1>

          <div class="block">
            <SearchBox placeholder="Search Monsters" handleChange={e => this.setState({searchField: e.target.value})} />
          </div>
          <div class="block">
            <CardList monsters={filteredMonsters} />
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
