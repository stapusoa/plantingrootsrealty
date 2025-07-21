import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/cardNew"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import {

  Phone,
  Mail,
  Star,
  
} from "lucide-react"
import { Button } from "@/components/button"

export function AgentCard() {
  return (
<Card>
                <CardHeader>
                  <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Agent" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Sarah Anderson</h3>
                      <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground ml-1">5.0 (127 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (555) 123-4567
                    </Button>
                    <Button variant="outlined" className="w-full bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
  )}