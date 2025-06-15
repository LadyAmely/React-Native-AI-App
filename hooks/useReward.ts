import {useState} from "react";
import {Alert} from "react-native";
import {Reward} from "@/types/reward";


type UseRewardsProps = {
    initialRewards?: Reward[];
};

export const useReward = ({ initialRewards = [] }: UseRewardsProps) => {
    const [rewards, setRewards] = useState<Reward[]>(initialRewards);
    const handleClaim = (id: string) => {
        setRewards((prev) =>
            prev.map((r) => (r.id === id ? { ...r, claimed: true } : r))
        );
        Alert.alert('Congratulations, you have received your prize!');
    };

    return { rewards, handleClaim };
};
