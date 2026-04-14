"use client";

import { useEffect } from "react";

export default function KonturAvailabilityCalendar() {
  useEffect(() => {
    const hwInit = () => {
      const HW = window.HotelWidget;
      if (!HW) return;

      try {
        HW.add({
          type: "availabilityCalendar",
          months: 2,
          appearance: {
            container: "WidgetHorizontalAvailabilityCalendarId"
          }
        });
      } catch (e) {
        console.error("Kontur Calendar rendering error", e);
      }
    };

    if (window.HotelWidget) {
      hwInit();
    } else if (!window.konturScriptLoaded) {
      window.konturScriptLoaded = true;
      const script = document.createElement("script");
      script.src = "https://bookonline24.ru/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.HotelWidget) {
          window.HotelWidget.init({
            hotelId: "2774874f-1347-4c7d-a835-9791d5814751",
            version: "2",
          });
          hwInit();
        }
      };
      document.head.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.HotelWidget) {
          hwInit();
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="glass-card" style={{
      borderRadius: '2rem',
      padding: '2rem',
      margin: '0 auto',
      width: '100%',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div 
        id="WidgetHorizontalAvailabilityCalendarId" 
        style={{ width: '100%' }}
      >
        <div style={{ textAlign: 'center', opacity: 0.5 }}>
          Загрузка календаря доступности...
        </div>
      </div>
    </div>
  );
}
