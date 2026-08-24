"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "tá tranquilo",
        2000,
        "tá seguro",
        2000,
        "tá protegido",
        2000,
      ]}
      wrapper="span"
      speed={50}
      className="text-blue-600 md:text-blue-400"
      repeat={Infinity}
    />
  );
}
