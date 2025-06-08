import {A, B, C, D, E, F, G, question, correctAnswers} from '../../components/questions/questionMajorScaleLogic'
import Logic from '../../components/Logic';

export default function pageMajorScale() {

  return(
    <Logic
      A={A}
      B={B}
      C={C}
      D={D}
      E={E}
      F={F}
      G={G}
      question={question}
      correctAnswers={correctAnswers}
      url='../pages/pageMajorScale'
    />
  )
}