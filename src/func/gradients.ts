export type GradientData = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export const generateUniqueData = (count: number, minDistance: number): GradientData[] => {
    const data: GradientData[] = [];
    for (let i = 0; i < count; i++) {
        let newItem: GradientData;
        if (i < 2) {
            newItem = {
                top: Math.random() * window.innerHeight,
                left: Math.random() * (window.innerWidth / 2),
                width: 150 + Math.random() * 300,
                height: 150 + Math.random() * 300,
            };
        } else {
            newItem = {
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth,
                width: 150 + Math.random() * 300,
                height: 150 + Math.random() * 300,
            };
        }

        const isUnique = data.every(item => {
            const dx = item.left - newItem.left;
            const dy = item.top - newItem.top;
            return Math.hypot(dx, dy) >= minDistance;
        });

        if (isUnique) {
            data.push(newItem);
        } else {
            i--;
        }
    }
    return data;
};
