import React from 'react';
import { Link } from 'react-router-dom';

class Front extends React.Component{
  render(){
    return(
      <div className='front'>
      <Link to='/'>Home</Link>
      <h1>Front Lever</h1>
      <p> O front lever é um movimento estático de nível intermediário, porém existem inúmeras variações avançadas dele com 
        extrema dificuldade. É um movimento que á primeira vista parece fácil, porém, se bem realizado, rende muitos pontos em
        competições, e suas variações mais avançadas estão entre os moves mais valorizados de todo o Street Workout. Conheça abaixo
        algumas delas:
      </p>
      <h4> Full Front Lever </h4>
      <div className='full-front'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/front.jpg?raw=true' width='200px'></img>
        <p> É o front lever na sua versão padrão, mais conhecida. É de nível intermediário, e para consegui-lo, deve se primeiro
          saber fazer bastante barras fixas, cerca de 20. Depois, treine as progressões: Negativa de Front Lever, Tuck Front Lever,
          One Leg Front Lever e Straddle Front Lever.
        </p>
      </div>
      <h4> Touch Front Lever </h4>
      <div className='touch'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/touch.jpg?raw=true' width='200px'></img>
        <p> É o front lever com a cintura/abdômen encostando na barra. Se realiza com os braços flexionados fazendo força pra
          puxar. É extremamente mais difícil que um front lever normal, precisando de muita força na região dorsal para realizá-lo.
          A pegada falsa (false grip) ajuda muito na sua realização, necessitando de uma barra mais grossa que o padrão para executar
          essa pegada.
          </p>
      </div>
      <h4> One Arm Front Lever </h4>
      <div className='one-arm-front'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/oafl.jpeg?raw=true' width='200px'></img>
        <p> É o front lever com uma só mão. É um movimento de nível avançado, também sendo muito mais difícil que um front normal.
          É extremamente raro ver um One Arm Front de forma perfeita, como esse da foto, realizado pelo atleta cubano Osvaldo Lugones.
          Um dos erros mais comuns dos atletas que tentam executá-lo, é do quadril e pernas ficarem caídos em relação ao resto do corpo,
          caracterizando bad form (forma ruim). Outro erro comum é jogar o corpo para o lado da mão, não ficando perfeitamente reto.
          É um movimento com alto risco de lesão, então deve se ter cuidado ao treinar, para começar a treiná-lo deve ter o Front Lever normal já dominado.
          </p>
      </div>
      <h4> Victorian </h4>
      <div className='victorian'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/vic.jpg?raw=true' width='200px'></img>
        <p> A Victorian nas paralelas é um dos movimentos mais avançados de todo o Street Workout, apesar de parecer fácil quando
          comparado visualmente a outros movimentos, como os de uma mão, é muito mais difícil. Para ser realizado de forma correta,
          o corpo precisa estar na altura da paralela ou acima, nunca abaixo. É um movimento que vem da ginástica olímpica, sendo realizado
          nas argolas nessa modalidade. No SW, pode ser realizado na barra ou nas paralelas, sendo que nas paralelas tem seu grau de dificuldade mais alto.
          </p>
      </div>
      </div>
        )
    }
  }
    

export default Front;