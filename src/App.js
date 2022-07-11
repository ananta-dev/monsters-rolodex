import { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(() => {
                    return {
                        monsters: users,
                        filteredMonsters: users,
                    };
                });
            });
    }

    handleMonsterSearchBoxChange = event => {
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {
                searchField,
            };
        });
    };

    render() {
        console.log('Render App');

        const { monsters, searchField } = this.state;
        const { handleMonsterSearchBoxChange } = this;

        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox
                    searchBoxClassName='monsters-search-box'
                    placeholderText='search monsters'
                    onChangeHandler={handleMonsterSearchBoxChange}
                />
                <CardList items={filteredMonsters} />
            </div>
        );
    }
}

export default App;
