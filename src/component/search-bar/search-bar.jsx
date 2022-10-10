import { useState } from "react"

const SearchBar = (props) => {

    const { onSearch } = props

    const [pokemonName, setPokemonName] = useState("")

    return (
        <>
            <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)}/>
            <button onClick={() => onSearch(pokemonName)}>Search pokemon</button>
        </>
    )
}

export default SearchBar