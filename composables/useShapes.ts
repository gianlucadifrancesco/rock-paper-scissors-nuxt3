const ALL_SHAPES = ["rock", "paper", "scissors", "spock", "lizard"] as const;
export type Shape = (typeof ALL_SHAPES)[number];

const DEFAULT_SHAPES = ["rock", "paper", "scissors"] as const satisfies Shape[];
const ADVANCED_SHAPES = [
  ...DEFAULT_SHAPES,
  "spock",
  "lizard",
] as const satisfies Shape[];

export default function useShapes() {
  const route = useRoute();
  return route.query.mode === "advanced" ? ADVANCED_SHAPES : DEFAULT_SHAPES;
}
