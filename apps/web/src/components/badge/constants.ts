export const BADGE_SIZE = ["sm", "md", "lg"] as const;
export type BadgeSize = (typeof BADGE_SIZE)[number];

export const BADGE_COLOR = ["default", "primary", "secondary", "critical", "neutral", "contrast"] as const;
export type BadgeColor = (typeof BADGE_COLOR)[number];

export const BADGE_VARIANT = ["filled", "outlined", "ghost"] as const;
export type BadgeVariant = (typeof BADGE_VARIANT)[number];

export const BADGE_SHAPE = ["rounded", "square"] as const;
export type BadgeShape = (typeof BADGE_SHAPE)[number];

export const BADGE_POINTER = [true, false] as const;
export type BadgePointer = (typeof BADGE_POINTER)[number];