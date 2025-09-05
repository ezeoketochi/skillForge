import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Award, ArrowLeft, BookOpen, Clock, Play, CheckCircle, Lock, Users, Star } from "lucide-react"
import Link from "next/link"

const programData = {
  "web-development": {
    title: "Web Development Mastery",
    description: "Master modern web development with React, Node.js, and full-stack technologies",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    students: 1250,
    rating: 4.8,
    progress: 15,
    instructor: "Sarah Johnson",
    instructorTitle: "Senior Full-Stack Developer at Google",
    modules: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        duration: "1 week",
        lessons: 6,
        completed: 6,
        isUnlocked: true,
        lessons_detail: [
          { id: 1, title: "Introduction to HTML", duration: "45 min", completed: true },
          { id: 2, title: "HTML Structure and Semantics", duration: "60 min", completed: true },
          { id: 3, title: "CSS Basics and Styling", duration: "75 min", completed: true },
          { id: 4, title: "CSS Flexbox Layout", duration: "90 min", completed: true },
          { id: 5, title: "CSS Grid System", duration: "85 min", completed: true },
          { id: 6, title: "Responsive Design Principles", duration: "70 min", completed: true },
        ],
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master JavaScript programming fundamentals",
        duration: "2 weeks",
        lessons: 8,
        completed: 2,
        isUnlocked: true,
        lessons_detail: [
          { id: 1, title: "JavaScript Syntax and Variables", duration: "50 min", completed: true },
          { id: 2, title: "Functions and Scope", duration: "65 min", completed: true },
          { id: 3, title: "Objects and Arrays", duration: "70 min", completed: false },
          { id: 4, title: "DOM Manipulation", duration: "80 min", completed: false },
          { id: 5, title: "Event Handling", duration: "60 min", completed: false },
          { id: 6, title: "Asynchronous JavaScript", duration: "90 min", completed: false },
          { id: 7, title: "ES6+ Features", duration: "75 min", completed: false },
          { id: 8, title: "JavaScript Best Practices", duration: "55 min", completed: false },
        ],
      },
      {
        id: 3,
        title: "React Development",
        description: "Build modern user interfaces with React",
        duration: "3 weeks",
        lessons: 10,
        completed: 0,
        isUnlocked: false,
      },
      {
        id: 4,
        title: "Node.js Backend",
        description: "Create server-side applications with Node.js",
        duration: "2 weeks",
        lessons: 8,
        completed: 0,
        isUnlocked: false,
      },
      {
        id: 5,
        title: "Database Integration",
        description: "Work with databases and data persistence",
        duration: "2 weeks",
        lessons: 7,
        completed: 0,
        isUnlocked: false,
      },
      {
        id: 6,
        title: "Full-Stack Project",
        description: "Build a complete web application",
        duration: "2 weeks",
        lessons: 6,
        completed: 0,
        isUnlocked: false,
      },
    ],
  },
   "data-science": {
  title: "Data Science Mastery",
  description: "Master modern Data Science, Machine Learning, and AI with cutting-edge tools and technologies.",
  duration: "12 weeks",
  level: "Beginner to Advanced",
  students: 980,
  rating: 4.9,
  progress: 15,
  instructor: "Dr. Emily Carter",
  instructorTitle: "Lead Data Scientist at Microsoft",
  modules: [
    {
      id: 1,
      title: "Python for Data Science",
      description: "Learn Python fundamentals tailored for data analysis and manipulation.",
      duration: "2 weeks",
      lessons: 8,
      completed: 6,
      isUnlocked: true,
      lessons_detail: [
        { id: 1, title: "Python Basics & Syntax", duration: "45 min", completed: true },
        { id: 2, title: "Data Structures in Python", duration: "60 min", completed: true },
        { id: 3, title: "Working with Libraries (NumPy, Pandas)", duration: "75 min", completed: true },
        { id: 4, title: "Data Cleaning & Preprocessing", duration: "90 min", completed: true },
        { id: 5, title: "Data Visualization with Matplotlib & Seaborn", duration: "85 min", completed: true },
        { id: 6, title: "Exploratory Data Analysis (EDA)", duration: "70 min", completed: true },
        { id: 7, title: "Handling Missing Data", duration: "50 min", completed: false },
        { id: 8, title: "Working with Dates & Times", duration: "65 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Statistics & Probability",
      description: "Core statistical concepts for analyzing and interpreting data.",
      duration: "2 weeks",
      lessons: 7,
      completed: 3,
      isUnlocked: true,
      lessons_detail: [
        { id: 1, title: "Descriptive Statistics", duration: "55 min", completed: true },
        { id: 2, title: "Probability Fundamentals", duration: "65 min", completed: true },
        { id: 3, title: "Distributions (Normal, Binomial, Poisson)", duration: "80 min", completed: true },
        { id: 4, title: "Hypothesis Testing", duration: "70 min", completed: false },
        { id: 5, title: "Confidence Intervals", duration: "50 min", completed: false },
        { id: 6, title: "Correlation & Regression Basics", duration: "75 min", completed: false },
        { id: 7, title: "Statistical Inference", duration: "90 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Understand and implement core ML algorithms.",
      duration: "3 weeks",
      lessons: 10,
      completed: 0,
      isUnlocked: false,
    },
    {
      id: 4,
      title: "Deep Learning & Neural Networks",
      description: "Build and train neural networks with TensorFlow and PyTorch.",
      duration: "2 weeks",
      lessons: 8,
      completed: 0,
      isUnlocked: false,
    },
    {
      id: 5,
      title: "Data Engineering & Big Data",
      description: "Learn how to handle large-scale datasets and pipelines.",
      duration: "2 weeks",
      lessons: 7,
      completed: 0,
      isUnlocked: false,
    },
    {
      id: 6,
      title: "Capstone Data Science Project",
      description: "Apply everything you’ve learned to solve a real-world problem.",
      duration: "1 week",
      lessons: 5,
      completed: 0,
      isUnlocked: false,
    },
  ],
},
}

// ✅ This tells Next which `[id]` pages to build
export async function generateStaticParams() {
  return Object.keys(programData).map((id) => ({ id }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const program = programData[id as keyof typeof programData]


  if (!program) {
    return <div>Program not found</div>
  }

  const totalLessons = program.modules.reduce((acc, module) => acc + module.lessons, 0)
  const completedLessons = program.modules.reduce((acc, module) => acc + module.completed, 0)

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/programs" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </Link>
              <Link href="/programs" className="flex items-center  hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Program Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className=" text-black">
                  <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
                  <p className=" text-lg">{program.description}</p>
                </div>
                <Badge variant="secondary">Enrolled</Badge>
              </div>

              <div className="flex items-center space-x-6 text-sm mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{totalLessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{program.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{program.rating}</span>
                </div>
              </div>

              {/* Progress Overview */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Your Progress</h3>
                      <p className="text-sm ">
                        {completedLessons} of {totalLessons} lessons completed
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-secondary">{program.progress}%</div>
                      <div className="text-sm ">Complete</div>
                    </div>
                  </div>
                  <Progress value={program.progress} className="h-3" />
                </CardContent>
              </Card>
            </div>

            {/* Instructor Info */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-secondary">
                      {program.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{program.instructor}</h3>
                    <p className="text-sm">{program.instructorTitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Course Curriculum</h2>
              {program.modules.map((module, index) => (
                <Card key={module.id} className={!module.isUnlocked ? "opacity-60" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm font-semibold text-secondary">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <span>{module.title}</span>
                            {!module.isUnlocked && <Lock className="w-4 h-4 " />}
                          </CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {module.completed}/{module.lessons} lessons
                        </div>
                        <div className="text-xs">{module.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <Progress value={(module.completed / module.lessons) * 100} className="h-2" />
                    </div>

                    {/* Lesson Details for unlocked modules */}
                    {module.isUnlocked && module.lessons_detail && (
                      <div className="space-y-2">
                        <Separator />
                        <div className="pt-4 space-y-3">
                          {module.lessons_detail.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                {lesson.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Play className="w-5 h-5 text-secondary" />
                                )}
                                <div>
                                  <h4 className="font-medium text-sm">{lesson.title}</h4>
                                  <p className="text-xs ">{lesson.duration}</p>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                variant={lesson.completed ? "outline" : "default"}
                                className={lesson.completed ? "bg-transparent" : ""}
                              >
                                {lesson.completed ? "Review" : "Start"}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {!module.isUnlocked && (
                      <div className="pt-4">
                        <p className="text-sm">
                          Complete the previous module to unlock this content
                        </p>
                      </div>
                    )}
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
