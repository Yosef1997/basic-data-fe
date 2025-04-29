export interface ProjectEvaluation {
  projectId: string
  note: string
  sign: string
  parameters: Parameter[]
}

export interface Parameter {
  formName: string
  fields: Field[]
}

export interface Field {
  name: string
  score: string
}
