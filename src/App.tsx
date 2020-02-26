import * as React from 'react';
import './App.css';
import PersonComponent from './compotents/PersonComponent';
import PersonListComponent from './compotents/PersonListComponent';
import {Person} from './person'
export interface IAppProps {

}

export interface IAppState {
  people: Person [];
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      people: [p1,p2,p3]
    }
  }

  public render() {
    const paikka = "Keilaranta, Espoo";
    let p1 = new Person("1", "Niina", "niina@joku.fi")
    
    return (
         <div className="App">
      <header>
        <h1>React Typescript</h1>
      </header>
     <nav></nav>
     <main>
       <PersonComponent location={paikka} person={p1}/>
       <PersonListComponent people={this.state.people} />
     </main>
     <footer></footer>
    </div>
    );
  }
}

let p1 = new Person("1", "Niina", "niina@joku.fi");
let p2 = new Person("2", "Marjut", "marjut@joku.fi");
let p3 = new Person("3", "Hanna", "hanna@joku.fi");