"use client";

import { CalendarIcon } from "./icons";

type BookingButtonProps = {
  variant?: "hero" | "header" | "link";
  children: React.ReactNode;
};

export function BookingButton({ variant = "hero", children }: BookingButtonProps) {
  function openBooking() {
    window.dispatchEvent(new CustomEvent("open-booking"));
  }

  if (variant === "header") {
    return (
      <button className="header-cta" type="button" onClick={openBooking}>
        {children}
      </button>
    );
  }

  if (variant === "link") {
    return (
      <button className="text-link inline-booking-link" type="button" onClick={openBooking}>
        {children} <span aria-hidden="true">→</span>
      </button>
    );
  }

  return (
    <button className="primary-button" type="button" onClick={openBooking}>
      {children}
      <span aria-hidden="true">
        <CalendarIcon />
      </span>
    </button>
  );
}
