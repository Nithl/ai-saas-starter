"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-md">
            <Card className="p-6 shadow-lg border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold mb-2">Wir verwenden Cookies 🍪</h3>
                <p className="text-sm text-zinc-500 mb-4">
                    Wir nutzen Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                    Einige sind essenziell, andere helfen uns, unser Angebot zu optimieren.
                </p>
                <div className="flex gap-2 justify-end">
                    <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
                        Ablehnen
                    </Button>
                    <Button size="sm" onClick={accept}>
                        Akzeptieren
                    </Button>
                </div>
            </Card>
        </div>
    );
}
