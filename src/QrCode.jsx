import React from "react";
import Qrcode from "./Design/images/image-qr-code.png";

function QrCode() {
  return (
    <div className="ms-6 me-6 rounded-[20px] p-4 bg-white h-fit flex flex-col items-center justify-center translate-y-1/4 shadow-2xl w-[350px]">
      <img src={Qrcode} alt="Qr scan code" className="w-full rounded-[10px]" />
      <h1 className="mt-6 text-[25px] font-bold leading-7 text-center ms-4 me-4 text-HeaderColor ">
        Improve your front-end skills by building projects
      </h1>
      <p className="mt-4 mb-7 text-center ms-4 me-4 text-ParagraphColor  text-lg leading-6">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QrCode;
