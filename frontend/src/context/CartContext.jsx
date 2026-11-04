import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CartContext = createContext();

const STORAGE_KEY = "poniag-cart-v2";

const loadCart = () => {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCart);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const showToast = useCallback((product) => {
    clearTimeout(toastTimer.current);
    setToast({ product, key: Date.now() });
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const dismissToast = useCallback(() => {
    clearTimeout(toastTimer.current);
    setToast(null);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    showToast(product);
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = (id) =>
    cart.find((item) => item.id === id)?.quantity ?? 0;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartSavings = cart.reduce(
    (total, item) =>
      total + Math.max(0, (item.oldPrice ?? item.price) - item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getQuantity,
        cartCount,
        cartTotal,
        cartSavings,
        toast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
