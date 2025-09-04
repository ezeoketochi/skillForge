"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = false }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    // This would typically check a token in localStorage or make an API call
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token")
      const authenticated = !!token
      setIsAuthenticated(authenticated)

      if (requireAuth && !authenticated) {
        router.push("/login")
      } else if (!requireAuth && authenticated) {
        router.push("/dashboard")
      }
    }

    checkAuth()
  }, [requireAuth, router])

  if (isAuthenticated === null) {
    // Loading state
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (requireAuth && !isAuthenticated) {
    return null // Will redirect to login
  }

  if (!requireAuth && isAuthenticated) {
    return null // Will redirect to dashboard
  }

  return <>{children}</>
}
