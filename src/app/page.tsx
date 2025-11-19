import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CookieBanner } from '@/components/legal/cookie-banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">AI SaaS Starter</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/ai">
            AI Demo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Launch Your AI Startup in Days, Not Months
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The ultimate Next.js starter kit for AI applications. Includes Auth, Payments, Database, and German compliance features.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button className="h-11 px-8">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/yourusername/ai-saas-starter" target="_blank">
                  <Button variant="outline" className="h-11 px-8">
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                  <CheckCircle2 className="text-white h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Authentication Ready</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Secure user management with Clerk. Sign up, sign in, and profile management out of the box.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                  <CheckCircle2 className="text-white h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Stripe Payments</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Monetize your app with Stripe Checkout. Subscription and one-time payment support.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                  <CheckCircle2 className="text-white h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">German Compliance</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Includes Impressum, Privacy Policy templates, and a GDPR-compliant cookie banner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 AI SaaS Starter. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/impressum">
            Impressum
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <CookieBanner />
    </div>
  );
}
