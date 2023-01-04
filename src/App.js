import './App.css';
import UavSound from './components/UavSound/UavSound';
import RevivingSound from './components/RevivingSound/RevivingSound';
import Revivedsound from './components/RevivedSound/RevivedSound';
import PlatingSound from './components/PlatingSound/PlatingSound';
import AirstrikeSound from './components/AirstrikeSound/AirstrikeSound';

function App() {
  return (
    <div className="p-4 bg-gray-700 h-screen">
      <div className='text-center py-4 text-yellow-500 uppercase font-medium leading-relaxed tracking-wide'>
        Warzone Sampler
      </div>
        <div className='grid grid-cols-2 gap-4'>
          <UavSound/>
          <RevivingSound/>
          <Revivedsound/>
          <PlatingSound/>
          <AirstrikeSound/>
        </div>
    </div>
  );
}

export default App;
