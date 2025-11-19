import { Card } from '@/components/ui/card';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-zinc-500">Welcome back to your AI workspace.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-6">
                    <h3 className="font-semibold text-sm text-zinc-500">Total Generations</h3>
                    <p className="text-2xl font-bold mt-2">124</p>
                </Card>
                <Card className="p-6">
                    <h3 className="font-semibold text-sm text-zinc-500">Credits Remaining</h3>
                    <p className="text-2xl font-bold mt-2">850</p>
                </Card>
                <Card className="p-6">
                    <h3 className="font-semibold text-sm text-zinc-500">Current Plan</h3>
                    <p className="text-2xl font-bold mt-2">Pro</p>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-6">
                    <h3 className="font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span>Generated "Blog post about AI"</span>
                            <span className="text-zinc-500">2 mins ago</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span>Generated "Email to client"</span>
                            <span className="text-zinc-500">1 hour ago</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
