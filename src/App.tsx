import { QRCodeCard } from "components";

export default function App() {
  return (
    <div className="relative grid h-dvh place-content-center bg-slate-300 px-6.75">
      <main>
        <QRCodeCard />
      </main>
      <footer className="text-preset-2 absolute bottom-4 w-full text-center text-slate-500">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="font-bold text-slate-900"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="font-bold text-slate-900"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </div>
  );
}
