import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Clock, Shirt, CheckCircle2 } from "lucide-react";
import { useEquipment } from "@/hooks/use-laundry";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import exteriorImg from "@assets/download_1770059441769.jpg";
import interiorImg from "@assets/download-1_1770059441769.jpg";
import galleryImg1 from "@assets/l_1770063880052.jpg";
import galleryImg2 from "@assets/l-2_1770063880056.jpg";
import galleryImg3 from "@assets/348s_1770063880054.jpg";
import galleryImg4 from "@assets/348s-1_1770063880055.jpg";
import galleryImg5 from "@assets/l-1_1770063880053.jpg";

export default function Home() {
  const { data: equipment, isLoading } = useEquipment();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
          <img
            src={exteriorImg}
            alt="Midland Coin Laundry Exterior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              <Star className="w-4 h-4 fill-current" />
              <span>Voted Best Laundry in Woodland Park</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Laundry Day <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Done Right.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-lg">
              Experience the cleanest, most reliable laundromat in town.
              From everyday loads to king-sized comforters, we have the machines you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 h-14 rounded-xl bg-primary hover:bg-primary/90">
                <Link href="/location">
                  Find Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 rounded-xl bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">State-of-the-Art Equipment</h2>
            <p className="text-muted-foreground text-lg">
              No waiting for machines. We have plenty of capacity for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-2xl" />
              ))
            ) : (
              equipment?.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-cyan-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-cyan-200/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-white">
                    <span className="font-display font-bold text-xl">{item.count}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight text-white">
                Why Choose Midland?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Open 24/7/365", desc: "We never close — do laundry any time, day or night." },
                  { icon: CheckCircle2, title: "Attendant On Hand", desc: "Friendly staff available 9AM–5PM, 7 days a week." },
                  { icon: Shirt, title: "Wash & Fold Service", desc: "Drop it off, pick it up fresh and folded." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                      <p className="text-cyan-100">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-pink-500/30 rounded-3xl transform rotate-3" />
              <img
                src={interiorImg}
                alt="Midland Coin Laundry Interior - Washers and Dryers"
                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 object-cover object-[center_30%] h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Take a Look Inside</h2>
            <p className="text-muted-foreground text-lg">
              Clean, bright, and ready for your laundry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: galleryImg1, alt: "Washers and dryers" },
              { src: galleryImg2, alt: "Dryer wall with seating" },
              { src: galleryImg3, alt: "Equipment rows" },
              { src: galleryImg4, alt: "Industrial machines" },
              { src: galleryImg5, alt: "Folding tables area" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-2xl ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: idx === 0 ? '300px' : '200px' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">Ready to clean up?</h2>
          <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
            Visit us today at 109 W Midland Ave. We have machines available right now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="rounded-xl shadow-lg bg-white text-blue-600 hover:bg-cyan-50">
                <Link href="/location">Get Directions</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="rounded-xl border-white/50 text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
