import * as React from 'react';
import './App.css';
import PersonListComponent from './compotents/PersonListComponent';
import PersonFormComponent from './compotents/PersonFormComponent';
import { Person } from './person'
import { getPeople, luoPerson, deletePerson } from './restclient';
export interface IAppProps {
}

export interface IAppState {
  people: Person[];
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      people: [p1, p2, p3]
    }
  }

  componentDidMount = () => {
    this.haeJaPaivita();
  }

  haeJaPaivita = () => {
    getPeople(lista => {
      this.setState({ people: lista});
    });
  }
  
  addPerson = (newperson: Person) => {
    luoPerson(newperson, (id:number) => {
      this.haeJaPaivita();
    })
  }

/*
  poista = (poistettavaID) => {
    deletePerson(poistettavaID)
      .then((response) => {
        this.haeJaPaivita();
      });
  }*/

  public render() {
    return (
      <div className="App">
        <header>
          <h1>React Typescript</h1>
        </header>
        <nav></nav>
        <main>
          <PersonFormComponent addPerson={this.addPerson} />
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