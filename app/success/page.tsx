import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, ArrowRight, BookOpen, Users, Trophy } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Animation */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold mb-4">Welcome to SkillForge!</h1>
            <p className="text-xl  mb-8">
              Your account is fully set up and your payment has been processed successfully. You now have access to all
              our apprenticeship programs.
            </p>

            {/* What's Next */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">What's Next?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Explore Programs</h3>
                    <p className="text-sm ">
                      Browse your enrolled programs and start learning immediately
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Join Community</h3>
                    <p className="text-sm ">
                      Connect with fellow learners and get support from mentors
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Earn Certificates</h3>
                    <p className="text-sm ">
                      Complete programs to earn industry-recognized certificates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href="/programs">
                  Start Learning Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Download Mobile App
                </Button>
              </div>
            </div>

            {/* Support */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Need Help Getting Started?</h3>
              <p className="text-sm mb-4">
                Our support team is here to help you make the most of your SkillForge experience.
              </p>
              <Button variant="outline" size="sm" className="bg-transparent">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
