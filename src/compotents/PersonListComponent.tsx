import * as React from 'react';
import { Person } from '../person'

export interface IPersonListProps {
    people: Person[]
}

export interface IPersonListState {
}

export default class PersonList extends React.Component<IPersonListProps, IPersonListState> {
    constructor(props: IPersonListProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        let lista = this.props.people.map(p => <li key={p.id}> {p.id}, {p.name}, {p.email}</li>)
        return (
            <div>
                {lista}
            </div>
        );
    }
}
