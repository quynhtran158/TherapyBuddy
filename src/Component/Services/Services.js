import "./Services.css";
import PricingCard from "./Pricing/PricingCard";
import "./Pricing/PricingCard.css";
import "./Pricing/PricingTable.css";
import PricingTable from "./Pricing/PricingTable";

function Services() {
  return (
    <div className="services">
      <PricingCard />
      <PricingTable />
    </div>
  );
}

export default Services;
