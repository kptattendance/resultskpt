"use client";

import { useEffect, useState } from "react";

const images = ["/clgimg1.jpg", "/clgimg2.jpg", "/clgimg3.jpg"];

export default function MainPageImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative hidden md:block h-[80vh] overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="College Campus"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Overlay Text */}
      <div className="absolute bottom-12 left-10 right-10 text-white z-10">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-lg">
          Student Result Portal
        </h2>
        <div className="h-1 w-20 bg-red-600 my-4" />
        <p className="text-sm tracking-wider opacity-90 max-w-md">
          Official online facility for verification of provisional semester
          examination results issued by the institution.
        </p>
      </div>
    </section>
  );
}
