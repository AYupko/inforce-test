import { ReactNode } from 'react';
import { Product } from '../../types/types';
import './modal.scss';

type Props = {
  setActive: (active: boolean) => void;
  formActive: boolean;
  onSubmit: (product: Product) => void;
  children: ReactNode;
}

export const Modal: React.FC<Props> = ({ setActive, formActive, onSubmit, children }) => {
  const handleSubmit = () => {
    // for testing that everything works without real form
    const product: Product = {
      id: 0, 
      name: 'Example Product',
      count: 4,
      size: {
        width: 50,
        height: 50
      },
      weight: 200,
    };
    onSubmit(product);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__buttons">
          <button className='modal__button' onClick={() => setActive(false)}>Cancel</button>
          <button className='modal__button' onClick={handleSubmit}>Submit</button>
        </div>
        {children}
        {formActive && (
          <div className="modal__form">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <input type="text" placeholder="Enter something..." />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};