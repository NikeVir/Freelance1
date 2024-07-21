export interface HeroContainer {
    title: string;
    description: string;
    points: string[];
    pointsColor: string;
    image: string;
    alt: string;
    buttonColor: "primary" | "blue" | "white" | "purple" | "purpleg" | "pinkg" | "yellowg" | "greendg" | "greenlg" | "outline";
}
export type ExploreInterface = {
    plan: string,
    pricePerGB: string,
    totalCost: string,
    action: string,
    variant: string

}