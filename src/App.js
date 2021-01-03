import {Component} from 'react';
import {CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import '../src/App.css'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//          This is a First React App 
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: []
    }
  }
  //Life Cycle of a Component
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data => this.setState({monsters:data}))
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={e=> this.setState({searchField : e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    ); 
  }  
}
export default App;