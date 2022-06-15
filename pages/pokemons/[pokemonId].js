import Image from "next/image"
import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    const maxPokemons = 251
    const api = `https://pokeapi.co/api/v2/pokemon/`
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
  
    const data = await res.json()
  
    const paths = data.results.map((pokemon, index) => {
      return {
        params: {pokemonId: (index + 1).toString()},
      }
    })
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export const getStaticProps = async (context) => {

    const id = context.params.pokemonId
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    const data = await res.json()
  
    return {
      props: { pokemon: data },
    }
  }

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div>
                    {pokemon.types.map((item, index) => (
                        <span key={index}>{item.type.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
