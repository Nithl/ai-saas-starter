import React from 'react';

export function Impressum() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border">
            <h1 className="text-2xl font-bold mb-6">Impressum</h1>

            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <section>
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Angaben gemäß § 5 TMG</h2>
                    <p>[Your Name / Company Name]</p>
                    <p>[Street Address]</p>
                    <p>[City, Zip Code]</p>
                    <p>Germany</p>
                </section>

                <section>
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Kontakt</h2>
                    <p>Telefon: [Phone Number]</p>
                    <p>E-Mail: [Email Address]</p>
                </section>

                <section>
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Umsatzsteuer-ID</h2>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                    <p>[DE123456789]</p>
                </section>

                <section>
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>[Your Name]</p>
                    <p>[Address]</p>
                </section>
            </div>
        </div>
    );
}
