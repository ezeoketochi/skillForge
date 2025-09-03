import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Award, ArrowLeft, Phone, Shield } from "lucide-react"
import Link from "next/link"

export default function VerifyPhonePage() {
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
              <Link href="/dashboard" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Verify Your Phone Number</h1>
              <p className="text-muted-foreground">
                We'll send a verification code to your phone number to secure your account
              </p>
            </div>

            {/* Phone Verification Form */}
            <Card>
              <CardHeader>
                <CardTitle>Phone Verification</CardTitle>
                <CardDescription>Enter your phone number to receive a verification code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue="+1234567890" required />
                    <p className="text-xs text-muted-foreground">
                      We'll send a 6-digit verification code to this number
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Verification Code
                  </Button>
                </form>

                {/* Verification Code Input (shown after sending code) */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <Label htmlFor="code">Verification Code</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="text-center text-lg tracking-widest"
                    />
                    <p className="text-xs text-muted-foreground">Enter the 6-digit code sent to your phone</p>
                  </div>
                  <Button className="w-full" variant="secondary">
                    Verify Phone Number
                  </Button>
                  <Button variant="ghost" className="w-full text-sm">
                    Didn't receive the code? Resend
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm mb-1">Why verify your phone?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Phone verification helps secure your account and enables important notifications about your
                    apprenticeship progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
