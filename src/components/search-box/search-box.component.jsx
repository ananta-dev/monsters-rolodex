import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        console.log('Render SearchBox');
        return (
            <input
                type='search'
                className={`search-box ${this.props.searchBoxClassName}`}
                placeholder={this.props.placeholderText}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default SearchBox;
