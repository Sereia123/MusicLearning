import { questions } from '../../components/questions/questionRelativePitch2';
import Relative from '../../components/Relative';

export default function pageRelativePitch2() {
  const timeSignature = 4;
  const cols = 4;

 return(
     <Relative
       cols={cols}
       questions={questions}
       timeSignature={timeSignature}
       url={'../pages/select'}
     />
   )
}