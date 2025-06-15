import {Reward} from "@/types/reward";

export type RewardCardProps = {
    item: Reward;
    handleClaim: (id: string) => void;
};