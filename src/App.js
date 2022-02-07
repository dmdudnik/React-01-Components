import Painting from './components/Painting';
import paintings from './paintings.json';

const painting = paintings;



export default function App() {
  return (
    <div>
      <Painting
    imgUrl={painting[0].url}
    title={painting[0].title}
    authorName={painting[0].author.tag}
    profileUrl={painting[0].author.url}
    price={painting[0].price}
  />,
      <Painting
    imgUrl={painting[1].url}
    title={painting[1].title}
    authorName={painting[1].author.tag}
    profileUrl={painting[1].author.url}
    price={painting[1].price}
      />,
      <Painting
    imgUrl={painting[2].url}
    title={painting[2].title}
    authorName={painting[2].author.tag}
    profileUrl={painting[2].author.url}
    price={painting[2].price}
  />,
    </div>
    
  );
}
