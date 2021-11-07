import Header from "../../components/header/Header";
import RentalsProperties from "../../components/rentalsProperties/RentalsProperties";
import "./rentals.css";

export default function Rentals() {
  return (
    <>
      <Header title="Properties Listing" />
      <RentalsProperties />
    </>
  );
}
