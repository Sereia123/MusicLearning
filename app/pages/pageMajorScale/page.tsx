import { questions } from '../../components/question/questionMajorScale';
import Origin from '../pageOrigin/page';

export default function pageMajorScale() {
  const cols = 7;
  const timeSignature = 4;

  return(
    <Origin
      cols={cols}
      questions={questions}
      timeSignature={timeSignature}
    />
  )
}