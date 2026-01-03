import { ModelAdapter } from "./adapter"

const registry: Record<string, ModelAdapter> = {}

export const registerModel = (adapter: ModelAdapter) => {
  registry[adapter.name] = adapter
}

export const getModel = (name: string): ModelAdapter => {
  const model = registry[name]
  if (!model) {
    throw new Error(`Model not found: ${name}`)
  }
  return model
}

export const listModels = () => Object.keys(registry)
