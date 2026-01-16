export enum View {
  LANDING = 'LANDING',
  ONBOARDING = 'ONBOARDING',
  CIRCLE = 'CIRCLE',
  REFLECTION = 'REFLECTION',
  SANCTUARY = 'SANCTUARY',
}

export enum GenderSpace {
  BROTHERS = 'BROTHERS',
  SISTERS = 'SISTERS',
}

export interface UserContext {
  onboarded: boolean;
  alias?: string;
  space?: GenderSpace;
  faithIntegration?: boolean;
}

export type CircleTab = 'STORIES' | 'GRATITUDE' | 'REFLECTION';

export interface Post {
  id: string;
  type: CircleTab;
  content: string;
  learning?: string; // "What I learned" for Stories
  authorAlias: string;
  timestamp: string;
  reactionCount: number;
}

export interface ReflectionStage {
  id: number;
  title: string;
  description: string;
  prompt: string;
  isFaithBased?: boolean;
}