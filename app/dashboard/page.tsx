import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { OnboardingProgress } from "@/components/onboarding-progress"
import { Award, Phone, CreditCard, BookOpen, AlertCircle, User, LogOut, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock user onboarding state
const onboardingSteps = [
  { id: "phone", title: "Verify Phone", completed: false, current: true, locked: false },
  { id: "id", title: "Upload ID", completed: false, current: false, locked: true },
  { id: "payment", title: "Complete Payment", completed: false, current: false, locked: true },
]

const isOnboardingComplete = onboardingSteps.every((step) => step.completed)

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 " />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="">
              {isOnboardingComplete
                ? "Your account is fully set up. Continue your learning journey!"
                : "Complete your setup to start your learning journey"}
            </p>
          </div>

          {/* Onboarding CTA - Show only if not complete */}
          {!isOnboardingComplete && (
            <Card className="mb-8 bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Complete Your Setup</h3>
                    <p className=" text-black mb-4">
                      Finish setting up your account to unlock all SkillForge features
                    </p>
                    <OnboardingProgress steps={onboardingSteps} />
                  </div>
                  <Button asChild>
                    <Link href="/onboarding">
                      Continue Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Setup Progress - Show detailed view if not complete */}
          {!isOnboardingComplete && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Account Setup Progress</CardTitle>
                <CardDescription>Complete these steps to unlock your full learning experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm ">1 of 3 completed</span>
                  </div>
                  <Progress value={33} className="h-2" />

                  <div className="grid gap-4 mt-6">
                    {/* Phone Verification */}
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <div className=" text-black">
                          <h3 className="font-medium">Verify Phone Number</h3>
                          <p className="text-sm ">Secure your account with phone verification</p>
                        </div>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/verify-phone">
                          <Phone className="w-4 h-4 mr-2  " />
                          Verify Now
                        </Link>
                      </Button>
                    </div>

                    {/* ID Verification */}
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <div>
                          <h3 className="font-medium">Upload Government ID</h3>
                          <p className="text-sm ">Verify your identity for program access</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/verify-id">
                          <FileText className="w-4 h-4 mr-2" />
                          Upload ID
                        </Link>
                      </Button>
                    </div>

                    {/* Payment */}
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <div className=" text-black">
                          <h3 className="font-medium">Complete Payment</h3>
                          <p className="text-sm ">Pay $30 annual fee to access all programs</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/payment">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Pay Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Selected Areas of Interest */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Areas of Interest</CardTitle>
              <CardDescription>Skills you selected during registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">Data Science</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-secondary" />
                  Browse Programs
                </CardTitle>
                <CardDescription>Explore available apprenticeship programs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/programs">View Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-secondary" />
                  Payment & Wallet
                </CardTitle>
                <CardDescription>Manage your payments and billing</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/wallet">Manage Wallet</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-secondary" />
                  Profile Settings
                </CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
