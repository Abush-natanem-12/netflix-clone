import Header from "./Header";
import MainHero from "./MainHero";

export function Hero() {
  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom left, rgba(0, 0, 0,.1), rgba(0, 12, 5, 0.9)), url('/header-image.png')",
      }}
    >
      <Header />

      <MainHero />
    </div>
  );
}
