import * as React from 'react';
import './App.css';
import PersonComponent from './compotents/PersonComponent';
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
    return (
         <div className="App">
      <header>
        <h1>React Typescript</h1>
        <h2>Postgres tietokannalla</h2>
      </header>
     <nav></nav>
     <main>
       <PersonComponent location={paikka}/>
     </main>
     <footer></footer>
    </div>
    );
  }
}