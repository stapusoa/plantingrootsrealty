import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/card/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input/input";
import { Textarea } from "@/components/textarea/textarea";
import { Label } from "@/components/label/label";
import type { PageType } from "@/components/navigation/types";

export function QuickContactSection({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="relative shrink-0 w-full bg-gradient-to-r from-[#5e4684] to-[#7a5ba8]">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white space-y-6">
                <h2 className="font-['Merriweather:Bold',_sans-serif] text-[42px] font-bold leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="font-['Karla:Regular',_sans-serif] text-white/90 text-[18px] leading-relaxed">
                  Whether you're buying, selling, or investing, I'm here to help you achieve your real estate goals. Let's connect today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3 rounded-xl"
                  >
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outlined"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  >
                    Call (801) 400-9242
                  </Button>
                </div>
              </div>

              {/* Quick Contact Form */}
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-['Merriweather:Bold',_sans-serif] text-[24px]">Quick Contact</CardTitle>
                  <CardDescription>
                    Get a response within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quickName" className="text-sm font-medium">Name</Label>
                      <Input 
                        id="quickName"
                        placeholder="Your name"
                        className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quickPhone" className="text-sm font-medium">Phone</Label>
                      <Input 
                        id="quickPhone"
                        placeholder="(801) 555-0123"
                        className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quickEmail" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="quickEmail"
                      type="email"
                      placeholder="your@email.com"
                      className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quickMessage" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="quickMessage"
                      placeholder="How can I help you?"
                      className="rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684] resize-none"
                      rows={3}
                    />
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] hover:from-[#4a3570] hover:to-[#65487c] text-white rounded-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}