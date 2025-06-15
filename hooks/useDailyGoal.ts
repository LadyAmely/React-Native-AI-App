import { useState, useMemo } from 'react';

export const useDailyGoal = () => {
    const [goal, setGoal] = useState<number>(20);
    const [completed, setCompleted] = useState<number>(12);
    const [input, setInput] = useState<string>('20');

    const handleSave = () => {
        const newGoal = parseInt(input);
        if (!isNaN(newGoal) && newGoal > 0) {
            setGoal(newGoal);
        }
    };

    const progress = useMemo(() => Math.min(completed / goal, 1), [completed, goal]);

    return {
        goal,
        completed,
        input,
        progress,
        setInput,
        handleSave,
    };
};
