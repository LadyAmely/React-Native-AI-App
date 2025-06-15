export type MenuItem = {
    label: string;
    icon: string;
    onPress: () => void;
};

export type TopMenuProps = {
    items: MenuItem[];
};
