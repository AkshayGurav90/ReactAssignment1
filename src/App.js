import './App.css';
import Course from './components/courses.js'
import './index.css'

function App() {

  const Details=[
    {
      Subject:'BE',
      Duration:'4 yrs',
      Fees:'50 lac',
    },
    {
      Subject:'Bsc',
      Duration:'3 yrs',
      Fees:'10 lac'
    },
    {
      Subject:'Bcom',
      Duration:'3 yrs',
      Fees:'10 lac'
    },
    ]

  return (
    <div>
      <h1>Courses Provided</h1>
      <Course {...Details[0]}></Course>
            <Course {...Details[1]}></Course>
            <Course {...Details[2]}></Course>
    </div>
  );
}

export default App;
