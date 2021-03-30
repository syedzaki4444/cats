const Card = ({monster}) => {
    return(
        <div class="column is-3 ">
            <div class="card">

                <div class="card-image">
                    <figure class="image is-180by180">
                        <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media-content">
                    <div class="title is-4">
                            {monster.name}
                    </div>
                    <div class="subtitle is-6">
                            {monster.email}
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;