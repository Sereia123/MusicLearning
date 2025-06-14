import { questions } from '../../components/questions/practiceMajorScale';
import Practice from '../../components/Practice';

export default function pageMajorScale() {
  const cols = 8;
  const timeSignature = 4;

  return(
    <Practice
      realCols={cols}
      questions={questions}
      timeSignature={timeSignature}
    />
  )
}