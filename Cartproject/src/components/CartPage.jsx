import { useCart } from "../context/CartContext";
import CartContainer from "./CartContainer";
import TotalsCard from "./TotalsCard";

function CartPage() {
  const { cart } = useCart();
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-6 md:px-6">
      <div className="flex-1">
        <CartContainer></CartContainer>
      </div>
      <div className="pt-6">{cart.length > 0 ? <TotalsCard /> : <div className="text-gray-600 text-2xl font-semibold">Nothing To Checkout</div>}</div>
    </div>
  );
}

export default CartPage;
