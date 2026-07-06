import Header from "./component/header/page";
import Hero from "./component/hero/page";
import Stats from "./component/stats/page";
import TestSection from "./component/test-section/page";
import Features from "./component/features/page";
import Updates from "./component/updates/page";
import ScrollFocusWrapper from "./component/ScrollFocusWrapper";
import OrdersPage from "./component/orders/page";
import RestaurantOSPage from "./component/restaurantos/page";
import FAQPage from "./component/faq/page";
import InsightsPage from "./component/insights/page";
import FooterPage from "./component/footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col">
        <ScrollFocusWrapper>
          <Hero />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <Stats />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <TestSection />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <Features />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <Updates />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <OrdersPage />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <RestaurantOSPage />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <FAQPage />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <InsightsPage />
        </ScrollFocusWrapper>
        <ScrollFocusWrapper>
          <FooterPage />
        </ScrollFocusWrapper>
      </main>
    </div>
  );
}
