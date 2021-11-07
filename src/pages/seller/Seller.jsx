import Header from "../../components/header/Header";
import Sellers from "../../components/sellers/Sellers";
import "./seller.css";
export default function Seller() {
  return (
    <div className="seller">
      <Header title="Seller" />
      <Sellers />
    </div>
  );
}
