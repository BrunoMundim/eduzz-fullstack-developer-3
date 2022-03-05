import Item from './components/Item';
import ItemAsTag from './components/ItemAsTag';
import Card from './components/Card';

const App = () => {
  return(
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item texto='Item 1' />
        <ItemAsTag>
          Item 2
        </ItemAsTag>
      </ul>
      <Card/>
    </>    
  )
}

export default App;