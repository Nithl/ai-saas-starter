import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Settings, CreditCard, Sparkles, LogOut } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-zinc-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-950 border-r hidden md:flex flex-col">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        AI SaaS
                    </h2>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <LayoutDashboard className="w-4 h-4" />
                            Overview
                        </Button>
                    </Link>
                    <Link href="/ai">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Sparkles className="w-4 h-4" />
                            AI Tools
                        </Button>
                    </Link>
                    <Link href="/dashboard/billing">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <CreditCard className="w-4 h-4" />
                            Billing
                        </Button>
                    </Link>
                    <Link href="/dashboard/settings">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Settings className="w-4 h-4" />
                            Settings
                        </Button>
                    </Link>
                </nav>
                <div className="p-4 border-t">
                    <Button variant="outline" className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
