import OrdersPage from "./component/orders/page";
import RestaurantOSPage from "./component/restaurantos/page";
import FAQPage from "./component/faq/page";
import InsightsPage from "./component/insights/page";
import FooterPage from "./component/footer/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <OrdersPage />
      <RestaurantOSPage />
      <FAQPage />
      <InsightsPage />
      <FooterPage />
    </div>
  );
}
