const SearchBox = ({placeholder, handleChange}) => {

    return (
        <div className="App">
           <input class='input is-primary is-medium' type="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default SearchBox;