import React from 'react';
import { Link } from 'react-router-dom';

class Handstand extends React.Component{
  render(){
    return(
      <div className='hand'>
        <Link to='/'>Home</Link>
        <h1>Handstand</h1>
        <p>Também conhecida como parada de mão, bananeira ou pino, entre vários outros nomes, a Handstand é um movimento existente
            em várias modalidades esportivas e artísticas, dentre elas, capoeira, breakdance, circo, ginástica olímpica, dentre várias outras.
            É um movimento que requer basicamente equilíbrio, e inicialmente, coragem para se jogar sem medo. Não requer praticamente nada de força,
            podendo ser realizada até mesmo por crianças que nunca treinaram nada de força. É um movimento considerado iniciante, sendo um dos primeiros a
            ser aprendido quando se está começando a treinar SW.
        </p>
        <h4>Handstand</h4>
        <div className='handstand'>
        <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/hand.jpg?raw=true' width='200px'></img>
        <p>A variaçao padrão do Handstand, se dá com os braços na largura dos ombros, e pernas fechadas, ficando com o corpo todo alinhado,
            curvas no corpo se caracterizariam uma bad form (forma ruim), é muito comum ficar com as pernas mais á frente do quadril, sendo 
            um erro que precisa ser corrigido. Para aprender esse movimento, primeiro se precisa treinar apoiado na parede, fazendo a parada de mão com o corpo na parede.
            Também é bom realizar tentativas, se lançando ao ar e tentando equilibrar. Não demora muito para um iniciante aprender, em cerca de 1 a 3 meses de treino já
            se consegue aprender.
        </p>
        </div>
        <h4>One Arm Handstand</h4>
        <div className='one-arm-hs'>
          <img src="https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/oahs.jpg?raw=true" width='200px'></img>
          <p>É a parada de mão realizada com apenas uma mão. É consideravelmente mais difícil que um handstand normal, sendo necessário muito equilíbrio.
              Para realizá-lo, é necessário ter um handstand normal muito bem alinhado, e normalmente para treiná-lo, o atleta deve realizar
              o Handstand e inclinar as pernas para um lado, e  ir tirando a mão do lado oposto aos poucos. Primeiro treine tirando dois dedos, depois tire três,
              depois tire 4 e faça o movimento com apenas um dedo, depois vá afastando esse dedo e vá segurando o movimento com o dedo de apoio bem longe da outra mão,
              até poder tirá-lo totalmente e realizar apenas com uma mão.
          </p>
        </div>
        <h4>Hollowback</h4>
        <div className='hollowback'>
          <img src='https://github.com/BernardoFontes/BernardoFontes.github.io/blob/master/assets/hollowback.jpeg?raw=true' width='200px'></img>
          <p>É a parada de mão com o deslocamento de ombro, com o movimento sendo feito com as pernas pra frente, quase encostando na cabeça,
              e o tronco para trás. Não pode ser confundido com o handstand 'banana', a realização do handstand de forma errada, na qual as pernas ficam um pouco para frente.
              É necessária muita flexibilidade e mobilidade para realizar esse movimento.
          </p>
        </div>
      </div>
    )
  }
}

export default Handstand;