import qrImage from "assets/image-qr-code.png";

export default function QRCodeCard() {
  return (
    <section className="flex max-w-80 flex-col gap-6 rounded-[20px] bg-white p-4 pb-10">
      <div className="w-full max-w-72 overflow-hidden rounded-[10px]">
        <img src={qrImage} alt="QR code" className="size-full object-cover" />
      </div>
      <div className="space-y-4 px-4 text-center">
        <h1 className="text-preset-1 text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-preset-2 text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
}
