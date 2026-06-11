import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-laundry";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Info } from "lucide-react";
import interiorImg from "@assets/download-2_1770059441770.jpg";

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you prefer to do it yourself or have us handle everything, 
            we offer a full range of laundry services to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-3xl w-full" />
            ))
          ) : (
            services?.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {/* We would dynamically render Lucide icons here if we had a mapping, for now using Info */}
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  <Check className="w-4 h-4 mr-2" />
                  Available Now
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Commercial Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
           <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Commercial Accounts
                </h2>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  We specialize in serving Vacation Rentals, BNBs, and small businesses. 
                  Get consistent, high-quality cleaning for all your linens and towels.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    Bulk pricing available
                  </li>
                  <li className="flex items-center text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    Fast turnaround times
                  </li>
                  <li className="flex items-center text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    Pickup & Delivery options
                  </li>
                </ul>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-colors">
                  Inquire About Commercial
                </a>
              </div>
              
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src={interiorImg}
                    alt="Midland Coin Laundry Interior - Commercial Equipment" 
                    className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                 />
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
