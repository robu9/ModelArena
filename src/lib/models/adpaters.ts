import { ModelMessage, ModelResponse, GenerateOptions } from "./types"

export interface ModelAdapter {
  name: string

  generate(
    messages: ModelMessage[],
    options?: GenerateOptions
  ): Promise<ModelResponse>
}
