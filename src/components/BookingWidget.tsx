"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

declare global {
  interface Window {
    HotelWidget?: any;
    konturScriptLoaded?: boolean;
  }
}

export default function BookingWidget() {
  useEffect(() => {
    const hwInit = () => {
      const HW = window.HotelWidget;
      if (!HW) return;

      try {
        HW.add({
          type: "bookingForm",
          inline: false,
          appearance: { container: "WidgetVerticalBlockId" }
        });
        HW.add({
          type: "showCheckAvailabilityButtonForMobileDevices",
          appearance: { container: "WidgetShowCheckAvailabilityButtonForMobileDevicesId" }
        });
      } catch (e) {
        console.error("Kontur Form rendering error", e);
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
      overflow: 'hidden',
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative',
      paddingBottom: '0.5rem'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: 'rgba(44, 83, 68, 0.8)', // Primary transparent
        backdropFilter: 'blur(10px)',
        color: 'var(--primary-foreground)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 600 }}>Онлайн-бронирование</h2>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
          Быстрое подтверждение и безопасная оплата
        </p>
      </div>

      {/* Body populated by Kontur */}
      <div style={{ padding: '0', minHeight: '400px' }}>
        <div id="WidgetVerticalBlockId" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '300px', opacity: 0.5 }}>
            Загрузка модуля...
          </div>
        </div>
        <div id="WidgetShowCheckAvailabilityButtonForMobileDevicesId"></div>
      </div>

      {/* Info footer */}
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.4)', 
        backdropFilter: 'blur(10px)',
        padding: '1.5rem 2rem', 
        borderTop: '1px solid rgba(44,83,68,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
          <span>{siteConfig.contacts.address}</span>
        </p>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--muted-foreground)', paddingLeft: '1.75rem' }}>
          Также заявки принимаются по телефону: <a href={`tel:${siteConfig.contacts.phones[0].replace(/[^\d+]/g, '')}`} style={{ fontWeight: 500, color: 'var(--foreground)' }}>{siteConfig.contacts.phones[0]}</a>
        </p>
        <div style={{ marginTop: '0.5rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius)', fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>
          Официальный модуль «Контур.Отель» обеспечивает 100% безопасность ваших платежей.
        </div>
      </div>
    </div>
  );
}
