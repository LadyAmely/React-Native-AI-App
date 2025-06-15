import {useEffect, useState} from "react";

const tips = [
    'Pamiętaj o krótkich przerwach w trakcie nauki.',
    'Powtarzaj materiał na głos – aktywujesz więcej zmysłów.',
    'Zacznij dzień od jednego małego zadania – to buduje rozpęd.',
    'Nie czekaj na motywację – działaj mimo jej braku.',
    'Zrób coś trudnego zanim włączysz social media.',
    'Porażka to część procesu. Liczy się konsekwencja.',
];

export const useDailyTip =()=>{
    const [todayTip, setTodayTip] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const todayIndex = new Date().getDate() % tips.length;
        setTodayTip(tips[todayIndex]);
    }, []);


    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            setTodayTip(randomTip);
            setLoading(false);
        }, 1000);
    };

    return {todayTip, handleRefresh, loading};
}