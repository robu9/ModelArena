export type ModelRole = "system" | "user" | "assistant"

export type ModelMessage = {
  role: ModelRole
  content: string
}

export type ModelResponse = {
  text: string
  tokens?: number
  latencyMs: number
  raw?: unknown
}

export type GenerateOptions = {
  temperature?: number
  maxTokens?: number
}
