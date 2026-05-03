"use client"
import { useEffect, useState } from "react";
import { getRelativeTimeString } from "./timeAgo"; 

export default function RelativeTime({ date }: { date: Date | string }) {
  const [timeString, setTimeString] = useState(getRelativeTimeString(date));

  useEffect(() => {
    // רענון אוטומטי כל 30 שניות
    const interval = setInterval(() => {
      setTimeString(getRelativeTimeString(date));
    }, 30000);

    return () => clearInterval(interval);
  }, [date]);

  return <span dir="rtl">{timeString}</span>;
}