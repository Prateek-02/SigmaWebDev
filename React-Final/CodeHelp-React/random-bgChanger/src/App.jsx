import Btn from "./components/Btn";

function App() {
  function getRandomColor (){
    const r = Math.floor(255 * Math.random());
    const g = Math.floor(255 * Math.random());
    const b = Math.floor(255 * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
  };

  function changeColor () {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <Btn changeColor={changeColor} />
    </div>
  );
}

export default App;
