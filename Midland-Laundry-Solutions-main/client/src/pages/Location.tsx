import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Location & Hours</h1>
          <p className="text-muted-foreground text-lg">Come visit us in beautiful Woodland Park!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Info Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Operating Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Facility</span>
                  <span className="font-semibold text-primary">Open 24/7/365</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-slate-500 mb-2">Attendant On Hand:</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-primary">9AM – 5PM, 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Contact Info
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">109 W Midland Ave<br />Woodland Park, CO 80863</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a href="tel:+17196867372" className="text-primary hover:underline">+1 (719) 686-7372</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button className="w-full" asChild>
                  <a href="https://maps.google.com/?q=109+W+Midland+Ave,+Woodland+Park,+CO+80863" target="_blank" rel="noreferrer">
                    Get Directions on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 h-[500px] lg:h-auto min-h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.4447477610446!2d-105.0569722846497!3d38.99516697955556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8714ba361623955d%3A0xe67f9d8f635465e9!2s109%20W%20Midland%20Ave%2C%20Woodland%20Park%2C%20CO%2080863!5e0!3m2!1sen!2sus!4v1647443187245!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Map location"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
