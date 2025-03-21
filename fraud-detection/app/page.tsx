import Link from "next/link"
import { ArrowRight, BarChart3, Shield, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Shield className="h-7 w-7" />
            <span className="text-xl font-bold">FraudGuard</span>
          </Link>
          <nav className="flex space-x-6">
            <Link href="/dashboard" className="text-base font-medium hover:underline">
              Dashboard
            </Link>
            <Link href="/rules" className="text-base font-medium hover:underline">
              Rules
            </Link>
            <Link href="/api-docs" className="text-base font-medium hover:underline">
              API Docs
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-muted">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
                Fraud Detection, Alert, and Monitoring
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Combine the power of expert rules with AI models to detect frauds better. Monitor how your detection
                is faring against actually reported errors.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button className="h-12 px-10 text-base">
                    View Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <ul className="grid gap-6">
                <li>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold">Real-time Fraud Detection</h3>
                    <p className="text-muted-foreground text-base">
                      Process transactions in real-time with an average latency of less than 300ms.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold">Rule-based & AI Detection</h3>
                    <p className="text-muted-foreground text-base">
                      Combine expert rules with AI models for better fraud detection.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold">Comprehensive Monitoring</h3>
                    <p className="text-muted-foreground text-base">
                      Track and analyze fraud patterns with detailed dashboards and reports.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-3">
              {/* Card 1 */}
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-7 w-7" />
                    <CardTitle className="text-xl">Fraud Detection</CardTitle>
                  </div>
                  <CardDescription className="text-base">Real-time and batch fraud detection APIs</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-muted-foreground">
                    Detect fraudulent transactions in real-time with our powerful API that combines rule-based and
                    AI-powered detection.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/api-docs">
                    <Button variant="outline" size="lg" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 2 */}
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sliders className="h-7 w-7" />
                    <CardTitle className="text-xl">Rule Configuration</CardTitle>
                  </div>
                  <CardDescription className="text-base">Customize fraud detection rules</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-muted-foreground">
                    Configure and fine-tune your fraud detection rules through an intuitive interface to adapt to
                    evolving fraud patterns.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/rules">
                    <Button variant="outline" size="lg" className="w-full">
                      Configure Rules
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 3 */}
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-7 w-7" />
                    <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
                  </div>
                  <CardDescription className="text-base">Comprehensive fraud monitoring</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-muted-foreground">
                    Monitor and analyze fraud patterns with detailed dashboards, reports, and visualizations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard">
                    <Button variant="outline" size="lg" className="w-full">
                      View Dashboard
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 FraudGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
