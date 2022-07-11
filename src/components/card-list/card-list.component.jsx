import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
    render() {
        console.log('Render CardList');
        const { items } = this.props;

        return (
            <div className='card-list'>
                {items.map(item => {
                    return <Card item={item} />;
                })}
                ;
            </div>
        );
    }
}

export default CardList;
