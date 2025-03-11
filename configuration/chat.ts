import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `👟 Yo, I'm ${AI_NAME}, your ultimate sneaker AI assistant! Ask me about sneaker releases, resale prices, and authentication tips. 🔥`;
export const DEFAULT_RESPONSE_MESSAGE: string = `🚨 Oops! I'm having trouble generating a response. Try again or ask me something else about sneakers.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `💬 Hold up! This message is getting long. Let's take a break before continuing.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
