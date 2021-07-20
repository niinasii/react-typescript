import * as React from 'react';
import { Person } from '../person'

export interface IPersonComponentProps {
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
      <tr>
        <td>
          {this.props.person.id}
        </td>
        <td>
          {this.props.person.name}
        </td>
        <td>
          {this.props.person.email}
        </td>
      </tr>
    );
  }
}

