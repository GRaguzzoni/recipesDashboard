import { CardList } from "../components/CardList";
import { Header } from "../components/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
     <h1>Welcome</h1>
      <CardList cards={null} />

    </>
  )
}