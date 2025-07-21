"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/cardNew"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { useState } from "react"

export function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("2280000")
  const [downPayment, setDownPayment] = useState("20")
  const [interestRate, setInterestRate] = useState("6.5")
  const [monthlyPayment, setMonthlyPayment] = useState("14250")

  const calculatePayment = () => {
    // Simple mortgage calculation
    const principal = Number.parseFloat(loanAmount) * (1 - Number.parseFloat(downPayment) / 100)
    const monthlyRate = Number.parseFloat(interestRate) / 100 / 12
    const numPayments = 30 * 12

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    setMonthlyPayment(Math.round(payment).toLocaleString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="loanAmount">Loan Amount</Label>
          <Input
            id="loanAmount"
            placeholder="$2,280,000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="downPayment">Down Payment</Label>
            <Input
              id="downPayment"
              placeholder="20%"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate</Label>
            <Input
              id="interestRate"
              placeholder="6.5%"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent" onClick={calculatePayment}>
          Calculate Payment
        </Button>
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-2xl font-bold">${monthlyPayment}</div>
          <div className="text-sm text-muted-foreground">Estimated monthly payment</div>
        </div>
      </CardContent>
    </Card>
  )
}
