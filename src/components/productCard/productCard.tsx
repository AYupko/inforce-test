import { Product } from "../../types/types";
import './productCard.scss';

type Props = {
  product: Product;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}; 

export const ProductCard:React.FC<Props> = ({ product, setModalActive }) => {

  return (
    <article className="card">
      <p className="card__title">{product.name}</p>
      <span className="card__info">{`Height: ${product.size.height}`}</span>
      <span className="card__info">{`Width: ${product.size.width}`}</span>
      <span className="card__info">{`Weight: ${product.weight}`}</span>
      <button className="card__button" onClick={() => setModalActive(true)}>X</button>
    </article>
  )
}