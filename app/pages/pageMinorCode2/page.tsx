import { questions } from '../../components/questions/questionMinorCode2';
import Origin from '../../components/Origin';

export default function pageMajorScale() {
  const cols = 7;
  const timeSignature = 4;

  return(
    <Origin
      cols={cols}
      questions={questions}
      timeSignature={timeSignature}
      url={''}
    />
  )
}