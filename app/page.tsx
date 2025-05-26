import GridContainer from './components/GridContainer';
import PianoKeys from './components/PianoKeys';

export default function Home() {
  return (
    <>
      <div className='box-border border- border-black flex mx-auto mt-[100px] w-[1000px] h-[600px]'>
        <div className="flex-1">
          <PianoKeys />
        </div> 
        <div className='flex-1'>
          <GridContainer />
        </div>
      </div>
      
    </>
    
  );
}