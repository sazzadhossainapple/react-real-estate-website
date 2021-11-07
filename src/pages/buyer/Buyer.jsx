import Buyers from "../../components/buyers/Buyers";
import Header from "../../components/header/Header";
import "./buyer.css";
export default function Buyer() {
  return (
    <div className="buyer">
      <Header title="Buyer" />
      <Buyers />
    </div>
  );
}
