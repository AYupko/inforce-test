import "./App.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { addProduct, deleteProduct, fetchProducts } from "./service/productService";
import { actions } from "./features/products";
import { ProductCard } from "./components/productCard";
import { Modal } from "./components/modal";
import { Product } from "./types/types";

export const App: React.FC = () => {
  const [formActive, setFormActive] = useState(false);
  const [warningActive, setWarningActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    fetchProducts().then((productsFromServer) => {
      dispatch(actions.set(productsFromServer));
    });
  }, [dispatch]);

  const handleAdd = async (product: Product) => {
    try {
      const newProduct = await addProduct(product);
      dispatch(actions.add(newProduct));
      setFormActive(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (product: Product) => {
    try {
      await deleteProduct(product.id);
      dispatch(actions.remove(product));
      setWarningActive(false);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <main className="main">
      <button className="button" onClick={() => setFormActive(true)}>
        Add new product
      </button>
      <section className="products">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            setModalActive={() => {
              setSelectedProduct(product);
              setWarningActive(true);
            }}
          />
        ))}
      </section>
      {formActive && (
        <Modal
          setActive={setFormActive}
          formActive={formActive}
          onSubmit={handleAdd}
        >
          <p>Please fill the form</p>
        </Modal>
      )}
      {warningActive && selectedProduct && (
        <Modal
          setActive={setWarningActive}
          formActive={false}
          onSubmit={() => handleDelete(selectedProduct)}
        >
          <p>Are you sure you want to delete this item?</p>
        </Modal>
      )}
    </main>
  );
};