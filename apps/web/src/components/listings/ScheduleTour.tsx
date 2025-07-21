import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/cardNew"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function ScheduleTour() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a Tour</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Virtual Tour
        </Button>
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule In-Person Tour
        </Button>
      </CardContent>
    </Card>
  )
}
