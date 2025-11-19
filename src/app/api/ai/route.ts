import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        // In a real app, you would check for authentication and credits here.
        // const { userId } = auth();
        // if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });

        const result = completion.choices[0].message.content;

        return NextResponse.json({ result });
    } catch (error) {
        console.error('[AI_ERROR]', error);
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}
