import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Phone, FileText, CreditCard, BookOpen, CheckCircle, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const onboardingSteps = [
  {
    id: "verify-phone",
    title: "Verify Phone Number",
    description: "Secure your account with phone verification",
    icon: Phone,
    status: "pending", // completed, pending, locked
    href: "/verify-phone",
    estimatedTime: "2 minutes",
  },
  {
    id: "verify-id",
    title: "Upload Government ID",
    description: "Verify your identity for program access",
    icon: FileText,
    status: "locked",
    href: "/verify-id",
    estimatedTime: "5 minutes",
  },
  {
    id: "payment",
    title: "Complete Payment",
    description: "Pay $30 annual fee to access all programs",
    icon: CreditCard,
    status: "locked",
    href: "/payment",
    estimatedTime: "3 minutes",
  },
  {
    id: "curriculum",
    title: "Access Your Programs",
    description: "Start learning with your personalized curriculum",
    icon: BookOpen,
    status: "locked",
    href: "/programs",
    estimatedTime: "Start learning!",
  },
]

export default function OnboardingPage() {
  const completedSteps = onboardingSteps.filter((step) => step.status === "completed").length
  const totalSteps = onboardingSteps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

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
              <Badge variant="outline">Setup in Progress</Badge>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Welcome Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Welcome to SkillForge!</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Let's get your account set up so you can start your learning journey
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Setup Progress</span>
                  <span className="text-muted-foreground">
                    {completedSteps} of {totalSteps} completed
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            </div>

            {/* Onboarding Steps */}
            <div className="space-y-6">
              {onboardingSteps.map((step, index) => {
                const Icon = step.icon
                const isCompleted = step.status === "completed"
                const isPending = step.status === "pending"
                const isLocked = step.status === "locked"

                return (
                  <Card
                    key={step.id}
                    className={`transition-all duration-200 ${
                      isPending ? "ring-2 ring-secondary/50 shadow-lg" : ""
                    } ${isLocked ? "opacity-60" : ""}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Step Number/Status */}
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              isCompleted
                                ? "bg-green-100 text-green-600"
                                : isPending
                                  ? "bg-secondary/10 text-secondary"
                                  : "bg-muted  text-black"
                            }`}
                          >
                            {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                          </div>

                          {/* Step Content */}
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                            <p className=" text-black mb-2">{step.description}</p>
                            <div className="flex items-center space-x-2 text-sm ">
                              <Clock className="w-4 h-4" />
                              <span>{step.estimatedTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center space-x-3">
                          {isCompleted && (
                            <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">
                              Completed
                            </Badge>
                          )}
                          {isPending && (
                            <Button asChild>
                              <Link href={step.href}>
                                Continue
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          )}
                          {isLocked && (
                            <Button variant="outline" disabled className="bg-transparent">
                              Locked
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Completion Message */}
            {completedSteps === totalSteps && (
              <Card className="mt-8 bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Setup Complete!</h3>
                  <p className="text-muted-foreground mb-4">
                    Congratulations! Your account is fully set up and ready to go.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/programs">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Help Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>We're here to support you through the setup process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="bg-transparent">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    Setup Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
