import styles from './styles.module.scss';


interface Card {
  title: string;
  categorie: string;
  url: string;

}

interface CardProps {
  data: Card;
}

export function Card({data}: CardProps):JSX.Element {

  return (
    <div className="container" >
      <img src={data.url} />
      <div>
        <text>{data.title}</text>
        <text>{data.categorie}</text>

      </div>

    </div>
  )

}