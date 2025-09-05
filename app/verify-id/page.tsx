"use client"

import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Award, ArrowLeft, Upload, FileText, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VerifyIdPage() {
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
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Verify Your Identity</h1>
              <p className="text-muted-foreground">
                Upload a government-issued ID to verify your identity and access all program features
              </p>
            </div>

            {/* ID Upload Form */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Upload Government ID</CardTitle>
                <CardDescription>
                  Please upload a clear photo of your government-issued identification document
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Accepted Documents */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Accepted Documents</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Driver's License</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Passport</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">National ID</span>
                    </div>
                  </div>
                </div>

                {/* Upload Area */}
                <div className="space-y-4">
                  <Label htmlFor="id-upload">Upload Document</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary/50 transition-colors">
                    <Upload className="w-12 h-12  mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs ">PNG, JPG, PDF up to 10MB</p>
                    </div>
                    <input id="id-upload" type="file" accept="image/*,.pdf" className="hidden" multiple={false} />
                    <Button className="mt-4" onClick={() => document.getElementById("id-upload")?.click()}>
                      Choose File
                    </Button>
                  </div>
                </div>

                {/* Upload Guidelines */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Photo Guidelines</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Clear, well-lit photo</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>All text is readable</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Document is not expired</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Full document visible</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>No glare or shadows</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>High resolution image</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Submit for Verification
                </Button>
              </CardContent>
            </Card>

            {/* Security & Privacy Notice */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-secondary mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-medium">Security & Privacy</h3>
                    <div className="text-sm  space-y-1">
                      <p>• Your ID information is encrypted and stored securely</p>
                      <p>• We only use this information for identity verification</p>
                      <p>• Your document will be reviewed within 24-48 hours</p>
                      <p>• We comply with all data protection regulations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
