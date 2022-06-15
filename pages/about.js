import Image from 'next/image'
import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>Projeto desenvolvido para aprendizado inicial de Next.js, com ajudo do intrutor e professor Matheus Battisti, na data de 14 de junho de 2022.</p>
        <p>Nesse projeto predento fazer uma pokedex utilizando uma API pública do site <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>, para fins de aprendizado e futuras melhorias do mesmo.</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="Pokemon Charizard" />
        <small><figcaption>Charizard é um Pokémon dos tipos Fogo e Voador introduzido na Primeira Geração</figcaption></small>
        </div>
        )
}