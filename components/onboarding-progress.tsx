"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Lock } from "lucide-react"

interface OnboardingStep {
  id: string
  title: string
  completed: boolean
  current: boolean
  locked: boolean
}

interface OnboardingProgressProps {
  steps: OnboardingStep[]
  className?: string
}

export function OnboardingProgress({ steps, className }: OnboardingProgressProps) {
  const completedSteps = steps.filter((step) => step.completed).length
  const totalSteps = steps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Setup Progress</span>
        <span className="text-sm text-muted-foreground">
          {completedSteps} of {totalSteps} completed
        </span>
      </div>
      <Progress value={progressPercentage} className="h-2 mb-4" />

      <div className="space-y-2">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              {step.completed ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : step.current ? (
                <Clock className="w-4 h-4 text-secondary" />
              ) : (
                <Lock className="w-4 h-4 text-muted-foreground" />
              )}
              <span className={step.completed ? "text-foreground" : "text-muted-foreground"}>{step.title}</span>
            </div>
            {step.completed && (
              <Badge variant="outline" className="text-xs">
                Done
              </Badge>
            )}
            {step.current && (
              <Badge variant="secondary" className="text-xs">
                Current
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
