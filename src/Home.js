import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <header className='links'>
        <Link to = '/Planche'><nav>Planche</nav></Link>
        <Link to ='/Front'> <nav>Front Lever</nav></Link>
        <Link to ='/Handstand'><nav>Handstand</nav></Link>
        </header>
        <h1>Estáticos- Street Workout</h1>
        <p>Nesse site apresentaremos mais sobre os movimentos estáticos da modalidade esportiva Street Workout, para que
            todos possam conhecer mais sobre essa modalidade.</p>
        <h2> O que são </h2>
        <p> Movimentos estáticos são uma das 3 categorias de movimentos no Street Workout, que incluem: Estáticos,
           Dinâmicos de força e dinâmicos acrobáticos. Para realizar movimentos estáticos é necessário: Equilíbrio, força,
           resistência e consciência corporal. Lembrando que para o estático 'valer' é necessário segurar o movimento por,
           no mínimo, 3 segundos. Alguns dos estáticos mais conhecidos são:
        </p>
        <ul>
          <li>Planche</li>
          <img src="https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/planche.jpeg?raw=true" width='200px'></img>
          <li>Front Lever</li>
          <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/front.jpg?raw=true' width='200px'></img>
          <li>Handstand</li>
          <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/handstand.jpeg?raw=true' width='200px' height='150px'></img>
        </ul>
        <footer class = "rodape">
        <a href="https://www.instagram.com/sw_berna/"><img src="https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/insta.png?raw=true" className="insta" /></a>
        <a href="https://www.linkedin.com/in/bernardo-fontes-/"><img src="https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/linkedin.png?raw=true" className="insta" /></a>

    </footer>
        </div>
      )
  }
}

export default Home;