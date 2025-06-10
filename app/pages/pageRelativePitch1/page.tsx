import { questions } from '../../components/questions/questionRelativePitch1';
import Relative from '../../components/Relative';

export default function pageRelativePitch1() {
  const cols = 4;
  const timeSignature = 4;

 return(
     <Relative
       cols={cols}
       questions={questions}
       timeSignature={timeSignature}
       url={'../pages/select'}
     />
   )
}