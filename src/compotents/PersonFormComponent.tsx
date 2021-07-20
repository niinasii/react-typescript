import * as React from 'react';
import { Person } from '../person';

export interface IPersonFormComponentProps {
    addPerson: (newperson: Person) => void
}
export interface IPersonFormComponentState {
    person: Person;
}
export default class PersonFormComponent extends React.Component<IPersonFormComponentProps, Person> {
    constructor(props: IPersonFormComponentProps) {
        super(props);

        this.state = {
            id: '', name: '', email: ''

        }
    }

    nameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: ev.target.value })
    }
    emailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: ev.target.value })
    }
    luoPerson = () => {
        this.props.addPerson(this.state)
    }

    public render() {
        return (
            <div>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nimi:</td>
                                <td><input value={this.state.name} onChange={this.nameChange} /></td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td><input value={this.state.email} onChange={this.emailChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={this.luoPerson}>Lisää</button>
                </form>
            </div>
        );
    }
}
