{/*}
import { Card } from "@/components/card/cardNew"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Phone, Mail, Star } from "lucide-react"

interface Agent {
  name: string
  title: string
  image: string
  phone: string
  email: string
  rating: number
  reviewCount: number
}

interface AgentCardProps {
  agent: Agent
}

const listing = {
  title: "Contact Brittany",
  description: "A lovely home with spacious rooms and a large backyard.",
  imageUrl: "https://example.com/image.jpg",

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card
                          title={listing.title}
                          description={listing.description}
                          image={{ url: listing.imageUrl, imagePosition: "inline" }}
                          price={listing.price}
                          amenities={[
                            { icon: "bed", label: `${listing.bedrooms} bedrooms` },
                            { icon: "bath", label: `${listing.bathrooms} bathrooms` },
                          ]}
                          size="md"
                        />
    <Card>
      <CardHeader>
        <CardTitle>Contact Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={agent.image || "/placeholder.svg"} alt={agent.name} />
            <AvatarFallback>
              {agent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{agent.name}</h3>
            <p className="text-sm text-muted-foreground">{agent.title}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < agent.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                {agent.rating}.0 ({agent.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full" size="lg">
            <Phone className="h-4 w-4 mr-2" />
            Call {agent.phone}
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
*/}