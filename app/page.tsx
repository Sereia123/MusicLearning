import GridContainer from './components/GridContainer';
import PianoKeys from './components/PianoKeys';

export default function Home() {
  return (
    <>
      <div className='flex mx-auto mt-[100px] w-[1000px] h-[600px] rounded-md'>
        <div className="flex-1">
          <PianoKeys />
        </div> 
        <div className=''>
          <GridContainer />
        </div>
      </div>
      
    </>
    
  );
}