import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';

function App() {

  return (
  <div>
  {/* <MyComponent name = 'Ravi' greetings="Hello" cars={['XUV', 'Range Rover']}/>; */}
  <MyComponent name = 'Ravi' greetings="Hello"/>;
  <MyComponent name = 'Haritha' greetings="Hiiii"/>;
  <MyComponent name = 'Isha' greetings="Hallow"/>;
  <MyComponent2/>;

  </div>
  )
}

export default App

//jsx will allow you to write html inside javascript