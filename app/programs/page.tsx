import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, ArrowLeft, BookOpen, Clock, Users, Star, Play, Lock } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Master modern web development with React, Node.js, and full-stack technologies",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    students: 1250,
    rating: 4.8,
    progress: 0,
    modules: 8,
    lessons: 45,
    isEnrolled: true,
    thumbnail: "/web-development-coding.png",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Learn Python, machine learning, and data analysis to become a data scientist",
    duration: "16 weeks",
    level: "Intermediate",
    students: 890,
    rating: 4.9,
    progress: 0,
    modules: 10,
    lessons: 60,
    isEnrolled: true,
    thumbnail: "/data-science-analytics-charts.png",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master SEO, social media, content marketing, and digital advertising strategies",
    duration: "10 weeks",
    level: "Beginner",
    students: 2100,
    rating: 4.7,
    progress: 0,
    modules: 6,
    lessons: 35,
    isEnrolled: false,
    thumbnail: "/digital-marketing-social-media.png",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces with design thinking principles",
    duration: "14 weeks",
    level: "Beginner to Intermediate",
    students: 1560,
    rating: 4.8,
    progress: 0,
    modules: 9,
    lessons: 52,
    isEnrolled: false,
    thumbnail: "/ui-ux-design-interface.png",
  },
]

export default function ProgramsPage() {
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Programs</h1>
            <p className="">
              Access your enrolled programs and explore new learning opportunities
            </p>
          </div>

          {/* Enrolled Programs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Enrolled Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs
                .filter((program) => program.isEnrolled)
                .map((program) => (
                  <Card key={program.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img
                        src={program.thumbnail || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="mb-2">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">Enrolled</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm ">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-black">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-black">
                            <BookOpen className="w-4 h-4" />
                            <span>{program.lessons} lessons</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-black">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{program.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{program.progress}%</span>
                        </div>
                        <Progress value={program.progress} className="h-2" />
                      </div>
                      <Button className="w-full" asChild>
                        <Link href={`/programs/${program.id}`}>
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Available Programs */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Available Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs
                .filter((program) => !program.isEnrolled)
                .map((program) => (
                  <Card key={program.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={program.thumbnail || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="mb-2">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </div>
                        <Badge variant="outline">Available</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-black">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-black">
                            <Users className="w-4 h-4" />
                            <span>{program.students.toLocaleString()} students</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-black">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{program.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-black">
                        <span className="">Level: {program.level}</span>
                        <span className="">{program.modules} modules</span>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
