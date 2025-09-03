import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card/cardNew"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import { Textarea } from "@/components/textarea"
import { Phone, Mail, MapPin, User, Building, MessageSquare } from "lucide-react"

export function ContactPage() {
  return (
    <div className="min-h-screen mt-50 bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Let's Get In Touch</h1>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 shadow-sm border-0 bg-white">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">+123 45 789 000</p>
                <p className="text-gray-600">+123 45 789 000</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-sm border-0 bg-white">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">inquiry@ataraxis.ai</p>
                <p className="text-gray-600">help@ataraxis.ai</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-sm border-0 bg-white">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">221b Elementary Street</p>
                <p className="text-gray-600">New York, NY</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Or fill out the form below
          </h2>

          <form className="space-y-6">
            {/* First Row - Dropdowns */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inquiry-purpose" className="text-sm font-medium text-gray-700">
                  Inquiry Purpose*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-gray-50 border-0">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description that fits you*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-gray-50 border-0">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="small-business">Small Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row - Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="full-name"
                    placeholder="Enter your full name..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>
            </div>

            {/* Third Row - Organization and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                  Organization
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="organization"
                    placeholder="Enter your organization..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message*
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  className="pl-10 pt-3 min-h-32 bg-gray-50 border-0 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3 h-auto font-medium"
              >
                Submit Form →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
