import './App.css';
import CardComponent from './Components/CardComponent';

function App() {

  let array = [
    { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description:
    'Descripcion imagen 1'},
    { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description:
    'Descripcion imagen 2'},
    { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description:
    'Descripcion imagen 3'},
    { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description:
    'Descripcion imagen 4'}
  ]

  let cards = [];
  array.forEach(element => {
    cards.push(<CardComponent url={element.url} title={element.title} description={element.description}></CardComponent>)
  })

  return (
    <div className="App">
      <header className="App-header">
        {cards}
      </header>
    </div>
  );
}

export default App;