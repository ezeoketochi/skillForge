import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Award, ArrowLeft, CreditCard, Shield, Check, Smartphone, Building } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </Link>
              <Link href="/dashboard" className="flex items-center  hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Complete Your Payment</h1>
              <p className="">
                Secure your access to all SkillForge programs with our annual membership
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Payment Method Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose your preferred payment option</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="card" className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-secondary/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="w-5 h-5 text-secondary" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="font-medium">Credit or Debit Card</div>
                          <div className="text-sm ">Visa, Mastercard, American Express</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-secondary/50 transition-colors">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          <div className="font-medium">PayPal</div>
                          <div className="text-sm">Pay with your PayPal account</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-secondary/50 transition-colors">
                        <RadioGroupItem value="apple" id="apple" />
                        <Smartphone className="w-5 h-5 text-secondary" />
                        <Label htmlFor="apple" className="flex-1 cursor-pointer">
                          <div className="font-medium">Apple Pay</div>
                          <div className="text-sm ">Quick and secure payment</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-secondary/50 transition-colors">
                        <RadioGroupItem value="bank" id="bank" />
                        <Building className="w-5 h-5 text-secondary" />
                        <Label htmlFor="bank" className="flex-1 cursor-pointer">
                          <div className="font-medium">Bank Transfer</div>
                          <div className="text-sm ">Direct bank account transfer</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Card Details Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Card Details</CardTitle>
                    <CardDescription>Enter your payment information securely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                    <CardDescription>Enter your billing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="United States" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="12345" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main Street" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="NY" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>SkillForge Annual Membership</span>
                      <span>$30.00</span>
                    </div>
                    <div className="flex justify-between text-sm ">
                      <span>Processing Fee</span>
                      <span>$0.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>$30.00</span>
                    </div>
                    <Button className="w-full" size="lg">
                      Complete Payment
                    </Button>
                  </CardContent>
                </Card>

                {/* What's Included */}
                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Access to all skill programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Expert mentorship</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Industry certificates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">24/7 platform access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Community support</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Notice */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2 text-sm ">
                      <Shield className="w-4 h-4" />
                      <span>Your payment is secured with 256-bit SSL encryption</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
