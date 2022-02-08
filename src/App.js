import Painting from './components/Painting';
import paintings from './paintings.json';

const painting = paintings;



export default function App() {
  const isOnline = true;
  return (
    <div>
      {isOnline && 'Онлайн'}
      { isOnline? 'Online' :'Offline'}
      <Painting
        imgUrl={painting[0].url}
        title={painting[0].title}
        authorName={painting[0].author.tag}
        profileUrl={painting[0].author.url}
        price={painting[0].price}
        quantity={ painting[0].quantity}
  />
      <Painting
        imgUrl={painting[1].url}
        title={painting[1].title}
        authorName={painting[1].author.tag}
        profileUrl={painting[1].author.url}
        price={painting[1].price}
        quantity={ painting[1].quantity}
      />
      <Painting
      imgUrl={painting[2].url}
      title={painting[2].title}
      authorName={painting[2].author.tag}
      profileUrl={painting[2].author.url}
      price={painting[2].price}
      quantity={ painting[2].quantity}
  />
    </div>
    
  );
}
