"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import siteData from "@/data/site.json";
import { formatPhone } from "@/lib/utils";

export function TopBar() {
  const { contact } = siteData;

  return (
    <div className="bg-navy-900 text-white/80 text-sm py-2 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-mint-500" />
            <span>{contact.address.full}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${formatPhone(contact.topBarPhone)}`}
            className="flex items-center gap-2 hover:text-mint-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-mint-500" />
            <span>{contact.topBarPhone}</span>
          </a>
          <a
            href={`mailto:${contact.emails[0]}`}
            className="flex items-center gap-2 hover:text-mint-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-mint-500" />
            <span>{contact.emails[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
