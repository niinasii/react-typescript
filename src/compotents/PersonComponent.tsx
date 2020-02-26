import * as React from 'react';

export interface IPersonComponentProps {
    location: string
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
      </div>
    );
  }
}

