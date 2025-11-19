"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

export default function AIPage() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!prompt) return;
        setLoading(true);
        try {
            const res = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setResult(data.result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="w-8 h-8 text-purple-500" />
                    AI Magic Generator
                </h1>
                <p className="text-zinc-500">
                    Enter a prompt and let our AI generate something amazing for you.
                </p>
            </div>

            <Card className="p-6 space-y-4">
                <Textarea
                    placeholder="Write a poem about a robot learning to love..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px]"
                />
                <Button
                    onClick={generate}
                    disabled={loading || !prompt}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        'Generate Magic'
                    )}
                </Button>
            </Card>

            {result && (
                <Card className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                    <h3 className="font-semibold mb-2 text-sm text-zinc-500 uppercase tracking-wider">Result</h3>
                    <div className="prose dark:prose-invert">
                        <p className="whitespace-pre-wrap">{result}</p>
                    </div>
                </Card>
            )}
        </div>
    );
}
