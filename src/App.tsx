import * as React from 'react';
import './App.css';
import PersonComponent from './compotents/PersonComponent';
import {Person} from './person'
export interface IAppProps {

}

export interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const paikka = "Keilaranta, Espoo";
    let p1 = new Person(1, "Niina", "niina@joku.fi")
    
    return (
         <div className="App">
      <header>
        <h1>React Typescript</h1>
        <h2>Postgres tietokannalla</h2>
      </header>
     <nav></nav>
     <main>
       <PersonComponent location={paikka} person={p1}/>
     </main>
     <footer></footer>
    </div>
    );
  }
}