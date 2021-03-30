
import Card from './Card';

const CardList = ({monsters}) => {
    return(
            <div class="columns is-multiline">
            {
                monsters.map(monster => (
                    <Card monster={monster} key={monster.id}/>
                ))
            }
            </div>
    )
}

export default CardList;