import * as React from 'react';
import { Person } from '../person';

export interface IPersonFormComponentProps {
}

export interface IPersonFormComponentState {
    person: Person;
}

export default class PersonFormComponent extends React.Component<IPersonFormComponentProps, IPersonFormComponentState> {
  constructor(props: IPersonFormComponentProps) {
    super(props);

    this.state = {
        id:'', name:'', email:''
    }
  }

  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
