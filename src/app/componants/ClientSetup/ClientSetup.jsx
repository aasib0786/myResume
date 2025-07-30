'use client';

import { useEffect } from "react";

export default function ClientSetup() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize AOS
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
        });
      }

      // Initialize Typed.js
      if (window.Typed) {
        new window.Typed(".typed", {
          strings: ["Designer", "Developer", "Freelancer", "Photographer"],
          typeSpeed: 60,
          backSpeed: 40,
          loop: true,
        });
      }
    }
  }, []);

  return null;
}
