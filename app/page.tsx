import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BookOpen, Award, Shield, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SkillForge</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </Link>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-6">
                Professional Development Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Master New Skills Through <span className="text-secondary">Structured Apprenticeships</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance mb-8">
                Join thousands of professionals advancing their careers through our comprehensive apprenticeship
                programs. Learn from industry experts and build real-world skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/diverse-group-of-black-students-collaborating-on-l.jpg"
                  alt="Diverse students learning together in a modern classroom"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-secondary">5,000+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Apprentices</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Skill Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose SkillForge?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines structured learning with real-world application to accelerate your professional
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/black-female-student-coding-on-laptop-with-mentor-.jpg"
                  alt="Student receiving mentorship while coding"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
                  <p className="text-white/90">Get personalized guidance from industry professionals</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/black-male-student-presenting-project-to-diverse-g.jpg"
                  alt="Student presenting project"
                  width={300}
                  height={190}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Real Projects</h4>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/diverse-black-students-celebrating-achievement-wit.jpg"
                  alt="Students celebrating achievement"
                  width={300}
                  height={190}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Verified Credentials</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Structured Curriculum</CardTitle>
                <CardDescription>
                  Comprehensive learning paths designed by industry experts to take you from beginner to professional.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Expert Mentorship</CardTitle>
                <CardDescription>
                  Get guidance from experienced professionals who have walked the path you're on.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Verified Credentials</CardTitle>
                <CardDescription>
                  Earn industry-recognized certificates that validate your skills to employers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Flexible Learning</CardTitle>
                <CardDescription>Learn at your own pace with 24/7 access to materials and resources.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Real Projects</CardTitle>
                <CardDescription>
                  Work on actual projects that build your portfolio and demonstrate your capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="w-10 h-10 text-secondary mb-4" />
                <CardTitle>Affordable Pricing</CardTitle>
                <CardDescription>
                  Quality education at just $30 annually - invest in your future without breaking the bank.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and begin your journey to professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary">
                  <Image
                    src="/young-black-woman-smiling-while-holding-phone-for-.jpg"
                    alt="Student verifying account"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Register & Verify</h3>
              <p className="text-muted-foreground">
                Create your account, verify your phone, and upload your ID for security.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary">
                  <Image
                    src="/black-male-student-browsing-course-options-on-tabl.jpg"
                    alt="Student choosing program"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Path</h3>
              <p className="text-muted-foreground">
                Select from our diverse range of skill programs that match your interests.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary">
                  <Image
                    src="/young-black-woman-making-secure-payment-on-laptop-.jpg"
                    alt="Student making payment"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Make Payment</h3>
              <p className="text-muted-foreground">
                Secure your spot with our affordable $30 annual fee using multiple payment options.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary">
                  <Image
                    src="/black-student-engaged-in-online-learning-with-head.jpg"
                    alt="Student learning"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Learning</h3>
              <p className="text-muted-foreground">
                Access your personalized curriculum and begin your transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One low annual fee gives you access to all programs and resources.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-secondary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Annual Membership</CardTitle>
                <div className="text-4xl font-bold text-secondary">$30</div>
                <CardDescription>Per year, all programs included</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Access to all skill programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Expert mentorship included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Industry-recognized certificates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>24/7 platform access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Community support</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/register">Start Your Journey</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/diverse-group-of-successful-black-professionals-ce.jpg"
                  alt="Successful graduates celebrating"
                  width={600}
                  height={400}
                  className="w-full h-auto opacity-90"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of professionals who have already started their journey with SkillForge.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">SkillForge</span>
              </div>
              <p className="text-muted-foreground">
                Empowering professionals through structured apprenticeship programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SkillForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
