import * as React from 'react';
import {Person} from '../person'

export interface IPersonComponentProps {
    location: string
    person: Person
}

export interface IPersonComponentState {
}

export default class PersonComponent extends React.Component<IPersonComponentProps, IPersonComponentState> {
  constructor(props: IPersonComponentProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h3>Hei, {this.props.location}</h3>
        <section> {this.props.person.id}, {this.props.person.name}, {this.props.person.email}</section>
      </div>
    );
  }
}

