import { useState } from "react";
import { Flashcard } from "../types/flashcard";
import { Alert } from "react-native";
import { FlashcardModel } from "@/models/flashcardModel";

const HUGGINGFACE_API_KEY = process.env.EXPO_PUBLIC_HUGGINGFACE_API_KEY;

export const useAIPrompt = () => {
    const flashcardModel = new FlashcardModel();

    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    const handleGenerate = async () => {
        if (!topic.trim()) return;

        setLoading(true);
        setFlashcards([]);

        try {
            const prompt = `Generate 5 flashcards about "${topic}".
Each flashcard should look like this:
Question: ...
Answer: ...
Separate each flashcard with a blank line.`;

            const response = await fetch(
                'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
                    },
                    body: JSON.stringify({ inputs: prompt }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }

            const data = await response.json();
            const content = data?.[0]?.generated_text;

            if (!content) throw new Error('No content received from AI.');

            const parsed: Flashcard[] = content
                .split('\n\n')
                .map((block: string): Flashcard | null => {
                    const q = block.match(/Question:\s*(.+)/i);
                    const a = block.match(/Answer:\s*(.+)/i);
                    return q && a
                        ? { question: q[1].trim(), answer: a[1].trim() }
                        : null;
                })
                .filter(
                    (card: Flashcard | null): card is Flashcard =>
                        !!card && card.question.length > 0 && card.answer.length > 0
                )
                .slice(1);

            if (!parsed.length) throw new Error('Failed to parse flashcards.');

            setFlashcards(parsed);

            await Promise.all(
                parsed.map((card) =>
                    flashcardModel.addFlashcard(card.question, card.answer)
                )
            );

        } catch (err: any) {
            console.error('Generation error:', err);
            Alert.alert('Error', err.message || 'Failed to generate flashcards.');
        } finally {
            setLoading(false);
        }
    };

    return { topic, setTopic, handleGenerate, loading, flashcards };
};
