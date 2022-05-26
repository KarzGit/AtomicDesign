import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  const user = {
    name: "太郎",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "abc@email.com",
    phone: "000-0000-0000",
    company: {
      name: "aaa株式会社"
    },
    website: "https://google.com"
  };

  return <Router />;
}
