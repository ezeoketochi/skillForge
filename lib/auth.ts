// Authentication utilities and types

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  isPhoneVerified: boolean
  isIdVerified: boolean
  hasCompletedPayment: boolean
  areasOfInterest: string[]
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Mock authentication functions - these would connect to your backend
export const authService = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Mock login - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "1",
      email,
      firstName: "John",
      lastName: "Doe",
      phone: "+1234567890",
      isPhoneVerified: false,
      isIdVerified: false,
      hasCompletedPayment: false,
      areasOfInterest: ["Web Development", "Data Science"],
      createdAt: new Date().toISOString(),
    }

    const token = "mock_jwt_token"
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user", JSON.stringify(mockUser))

    return { user: mockUser, token }
  },

  async register(userData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    areasOfInterest: string[]
  }): Promise<{ user: User; token: string }> {
    // Mock registration - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      isPhoneVerified: false,
      isIdVerified: false,
      hasCompletedPayment: false,
      areasOfInterest: userData.areasOfInterest,
      createdAt: new Date().toISOString(),
    }

    const token = "mock_jwt_token"
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user", JSON.stringify(mockUser))

    return { user: mockUser, token }
  },

  async logout(): Promise<void> {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user")
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user")
    return userStr ? JSON.parse(userStr) : null
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_token")
  },
}
