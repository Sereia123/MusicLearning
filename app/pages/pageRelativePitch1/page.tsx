import { questions } from '../../components/questions/questionRelativePitch1';
import Relative from '../../components/Relative';

export default function pageRelativePitch1() {
  const timeSignature = 4;
  const cols = 3;

 return(
     <Relative
       cols={cols}
       questions={questions}
       timeSignature={timeSignature}
       url={'../pages/select'}
     />
   )
}