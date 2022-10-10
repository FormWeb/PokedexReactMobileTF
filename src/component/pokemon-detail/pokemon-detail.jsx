import { useEffect, useState } from "react"
import axios from "axios"

const URLPokemon = "https://pokeapi.co/api/v2/pokemon/"
const URLPokemonSpecies = "https://pokeapi.co/api/v2/pokemon-species/"

const PokemonDetail = (props) => {

    const { pokemonName } = props

    const [pokemon, setPokemon] = useState(null)

    const getAbilities = (abilities) => {
        console.log(abilities)
        let result = ""
        for (const elem of abilities) {
            const nameAbility = elem.ability.name
            result += " " + nameAbility
        }
        return result
    }

    const searchPokemonDetail = async () => {
        const response = await axios.get(URLPokemon + pokemonName)
        const data = response.data

        const responseSpecies = await axios.get(URLPokemonSpecies + pokemonName)
        const dataSpecies = responseSpecies.data

        setPokemon({
            id: data.id,
            name: dataSpecies.names.find(
                elem => elem.language.name === "fr"
            ).name,
            imgUrl: data.sprites.front_default,
            types: data.types.map(
                elem => elem.type.name
            ).join(", "),
            abilities: getAbilities(data.abilities),
            description: dataSpecies.flavor_text_entries.find(
                elem => elem.language.name === "fr"
            ).flavor_text
        })
    }

    useEffect(() => {
        searchPokemonDetail()
    }, [pokemonName])

    return (
        <>
            {
                pokemon ? (
                    <>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.imgUrl} alt="Pokemon image" />
                        <h4>Types : {pokemon.types}</h4>
                        <h4>Abilités : {pokemon.abilities}</h4>
                        <p>{pokemon.description}</p>
                    </>
                ) : (
                    <h1>Erreur</h1>
                )
            
            }
        </>
    )
}

export default PokemonDetail