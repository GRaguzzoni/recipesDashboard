import { Card } from '../Card';
import styles from './styles.module.scss';


interface Card {
  title: string;
  categorie: string;
  url: string;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({cards}: CardsProps) {

  return (
    <>
      <div className={styles.containerGrid}>
        {cards.map(image => (
          <Card key={image.id} data={image} />
        ))}

      </div>
    </>
  )

}