import Card, { ICard } from "./Card"

interface ICards {
  data: Array<ICard>;
}

export default function Cards(props: ICards) {
  return (
    <div className="">{props.data.map(card => <Card {...card} />)}</div>
  )
}
