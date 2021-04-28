import React from 'react';
import { Link } from 'react-router-dom';

class Planche extends React.Component{
  render(){
    return(
      <div className='planche'>
        <Link to='/'>Home</Link>
        <h1>Planche</h1>
        <p>A Planche é um dos movimentos estáticos mais avançados, mais difíceis, mais bonitos e mais desejados
          de todo o esporte. Tem sua pontuação extremamente alta para quem consegue executá-la de forma perfeita em
          campeonatos, e tem inúmeras variações. Vejamos algumas delas:
        </p>
        <h4>Straddle Planche</h4>
        <div className='straddle'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/straddle.jpeg?raw=true'></img>
        <p>É uma das variações mais fáceis da Planche, consiste em realizar a planche com as pernas abertas. É conseguida após
          realizar as progressões: Planche Lean, Tuck Planche, Advanced Tuck Planche. É considerado um movimento de nível intermediário.
        </p>
        </div>
        <h4>Full Planche</h4>
        <div className='full'>
          <img src="https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/planche.jpeg?raw=true" width='200px'></img>
          <p>É a versão completa da Planche, a versão padrão, com as pernas juntas, esticadas, braços totalmente esticados, escápula
            protraída, quadril e pernas na mesma linha da cabeça, acima do chão. É um movimento avançado, que se consegue geralmente
            após dominar a Straddle Planche por cerca de 10 a 20 segundos. Geralmente, para um iniciante, são necessários de 6 meses
            a 1 ano de treinamentos de planche, de 2 a 4 vezes por semana para conseguir aprender a Full Planche.
          </p>
        </div>
        <h4>One Arm Plance</h4>
        <div className='one-arm-planche'>
          <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/onearm.jpg?raw=true'></img>
          <p>É a Planche com apenas uma mão. É um movimento extremamente difícil de se realizar, com pouquíssimos atletas
            no mundo que conseguem executá-la de forma perfeita, com os braços totalmente esticados e o corpo reto, dentre
            eles: Andrea Larosa(foto), Eryc Ortiz, Viktor Kamenov, Valentin Blanc, entre outros. Mesmo entre os atletas profissionais,
            que vencem competições de Street Workout, são raros os que conseguem executá-la corretamente.
          </p>
        </div>
        <h4>Maltesa</h4>
        <div className='maltesa'>
          <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/maltesa.jpg?raw=true' width='200px' height='150px'></img>
          <p>É uma variação avançada da Planche, na qual a pegada é mais aberta e a angulação do corpo fica mais abaixo em relação
            a uma Planche normal, ficando na mesma linha dos braços.
          </p>
        </div>
      </div>
    )
  }
}

export default Planche;