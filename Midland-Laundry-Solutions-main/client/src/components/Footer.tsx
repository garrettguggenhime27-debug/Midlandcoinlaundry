import { Link } from "wouter";
import { WashingMachine, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 lg:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <WashingMachine className="h-6 w-6" />
              <span className="font-display font-bold text-xl">Midland Coin Laundry</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your premier self-service laundromat in Woodland Park. Clean, reliable, and always ready for your biggest loads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">Location & Hours</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>109 W Midland Ave,<br />Woodland Park, CO 80863</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+17196867372" className="hover:text-white transition-colors">+1 (719) 686-7372</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Open 24/7/365</p>
                </div>
              </li>
              <li className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-sm text-slate-400">
                  Attendant on hand:<br />
                  <span className="text-white font-medium">9AM–5PM, 7 days a week</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Midland Coin Laundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
