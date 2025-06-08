import { questions } from '../../components/questions/questionMajorScale';
import Origin from '../../components/Origin';

export default function pageMajorScale() {
  const cols = 8;
  const timeSignature = 4;

  return(
    <Origin
      cols={cols}
      questions={questions}
      timeSignature={timeSignature}
    />
  )
}