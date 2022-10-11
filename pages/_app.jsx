import "../styles/lib/tailwind.css";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen bg-[#3c979d]/20">
      <Component {...pageProps} />
    </div>
  );
}
