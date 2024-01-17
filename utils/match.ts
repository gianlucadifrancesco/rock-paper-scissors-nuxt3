export const SHAPE_TO_WIN: Record<Shape, readonly Shape[]> = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  spock: ["rock", "scissors"],
  lizard: ["paper", "spock"],
} as const;

/**
 * Returns `"win"` if `shape1` wins against `shape2`, while returns `"lose"` if it's the opposite.
 * Otherwise, returns `"tie"`.
 */
export const match = (shape1: Shape, shape2: Shape): "win" | "lose" | "tie" =>
  SHAPE_TO_WIN[shape1].includes(shape2)
    ? "win"
    : SHAPE_TO_WIN[shape2].includes(shape1)
      ? "lose"
      : "tie";
