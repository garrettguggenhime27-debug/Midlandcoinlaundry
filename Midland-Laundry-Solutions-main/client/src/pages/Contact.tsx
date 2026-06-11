import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/routes";
import { useContactMutation } from "@/hooks/use-laundry";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useContactMutation();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Decorative/Info */}
          <div className="bg-primary p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Get in Touch</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Have a question about our services or need assistance? Send us a message and we'll help you out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-1 opacity-90">Call Us</h4>
                <a href="tel:+17196867372" className="text-blue-100 text-xl hover:text-white transition-colors">+1 (719) 686-7372</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 md:w-3/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-slate-700">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-slate-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none p-4" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
