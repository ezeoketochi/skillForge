import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Award, ArrowLeft, CreditCard, Download, Plus, Calendar, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const paymentHistory = [
  {
    id: "1",
    date: "2024-01-15",
    description: "SkillForge Annual Membership",
    amount: "$30.00",
    status: "completed",
    method: "Visa ****1234",
  },
  {
    id: "2",
    date: "2023-01-15",
    description: "SkillForge Annual Membership",
    amount: "$30.00",
    status: "completed",
    method: "PayPal",
  },
]

export default function WalletPage() {
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
              <Link href="/dashboard" className="flex items-center hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Payment & Wallet</h1>
                <p className="text-black">Manage your payments and billing information</p>
              </div>
              <Button asChild>
                <Link href="/payment">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Payment
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Current Membership */}
                <Card>
                  <CardHeader>
                    <CardTitle>Current Membership</CardTitle>
                    <CardDescription>Your active SkillForge subscription</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Annual Membership</h3>
                          <p className="text-sm ">Active until January 15, 2025</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="">Next billing date</span>
                        <span className="font-medium">January 15, 2025</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="">Amount</span>
                        <span className="font-medium">$30.00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your saved payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-secondary" />
                        <div>
                          <h3 className="font-medium">Visa ending in 1234</h3>
                          <p className="text-sm ">Expires 12/26</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Default</Badge>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Payment Method
                    </Button>
                  </CardContent>
                </Card>

                {/* Payment History */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Payment History</CardTitle>
                        <CardDescription>View your past transactions</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentHistory.map((payment) => (
                        <div
                          key={payment.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                              {payment.status === "completed" ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Clock className="w-5 h-5 text-amber-500" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{payment.description}</h3>
                              <div className="flex items-center space-x-2 text-sm ">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(payment.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>{payment.method}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{payment.amount}</div>
                            <Badge
                              variant={payment.status === "completed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">$60</div>
                      <div className="">Total Spent</div>
                    </div>
                    <Separator />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">2</div>
                      <div className="">Years Active</div>
                    </div>
                    <Separator />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">100%</div>
                      <div className="">Payment Success</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Support */}
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm ">Have questions about billing or payments?</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Contact Support
                    </Button>
                    <Button variant="ghost" className="w-full text-sm">
                      View Billing FAQ
                    </Button>
                  </CardContent>
                </Card>

                {/* Referral Program */}
                <Card>
                  <CardHeader>
                    <CardTitle>Refer Friends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm  mb-3">
                      Get 1 month free for each friend who joins SkillForge
                    </p>
                    <Button variant="secondary" className="w-full">
                      Share Referral Link
                    </Button>
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
