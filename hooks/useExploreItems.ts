
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {ExploreItem} from "@/types/explore";
import {db} from "@/firebase/config";


export const useExploreItems = () => {

    const [exploreItems, setExploreItems] = useState<ExploreItem[] | null>(null);

    useEffect(() => {
        getDocs(collection(db, 'exploreItems'))
            .then((snapshot) => {
                setExploreItems(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as ExploreItem[]
                );
            })
            .catch((err) => console.error('Challenge download error', err));
    }, []);

    return exploreItems;
}