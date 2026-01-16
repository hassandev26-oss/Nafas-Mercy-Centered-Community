import { Post, ReflectionStage } from './types';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    type: 'STORIES',
    content: "The urge was strong yesterday. I felt that familiar tightness in my chest. Instead of acting on it, I walked to the window and just watched the trees move in the wind for ten minutes.",
    learning: "I learned that urges are like waves; they peak and then they break. I don't have to drown in them.",
    authorAlias: "Traveler_99",
    timestamp: "2 hours ago",
    reactionCount: 12
  },
  {
    id: '2',
    type: 'GRATITUDE',
    content: "Grateful for the silence of the morning prayer (Fajr). It grounded me before the chaos of work began.",
    authorAlias: "QuietSoul",
    timestamp: "5 hours ago",
    reactionCount: 8
  },
  {
    id: '3',
    type: 'REFLECTION',
    content: "Why do we run from pain when pain is often the teacher we need most? Sitting with my discomfort today.",
    authorAlias: "Seeker",
    timestamp: "1 day ago",
    reactionCount: 15
  }
];

export const REFLECTION_STAGES: ReflectionStage[] = [
  {
    id: 1,
    title: "Arrival",
    description: "Leave the noise behind.",
    prompt: "Take three deep, slow breaths. Feel the weight of your body on the chair. You are here. You are safe. Nothing is required of you right now except to breathe.",
  },
  {
    id: 2,
    title: "Awareness",
    description: "Noticing without judgment.",
    prompt: "Scan your body and mind. Is there tension? Is there a heavy thought? Acknowledge it gently, like a cloud passing in the sky. Name it, but do not fight it.",
  },
  {
    id: 3,
    title: "Meaning",
    description: "Connecting to value.",
    prompt: "Beneath the struggle, what is one core value you are trying to honor today? Is it dignity? Health? Love for your family? Let that value shine a small light.",
  },
  {
    id: 4,
    title: "Mercy (Rahmah)",
    description: "The embrace of the Creator.",
    prompt: "Remember that your flaws do not disqualify you from Mercy. 'Verily, my Mercy prevails over my Wrath.' Allow yourself to feel forgiven for being human and imperfect.",
    isFaithBased: true,
  },
  {
    id: 5,
    title: "Intention",
    description: "A small step forward.",
    prompt: "What is one small, kind act you can do for yourself or others in the next hour? Set a gentle intention.",
  }
];

export const CRISIS_RESOURCES = [
  { name: "Global Suicide Hotline", contact: "988" },
  { name: "Emergency Services", contact: "911 / 112" },
];