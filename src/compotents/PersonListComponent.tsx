import * as React from 'react';
import { Person } from '../person'
import PersonComponent from './PersonComponent';

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
        let lista = this.props.people.map((p, ind) => {
        return (<PersonComponent person={p} key={p.id}/>)
        })
        return (
            <table>
                <tbody>
                    {lista}
                </tbody>
            </table>
        );
    }
}
