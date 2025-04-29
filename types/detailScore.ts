export interface ScoreDetail {
  id: number
  note: string
  sign: string
  parameters: ScoreParameter[]
  project: ProjectInfo
  chapterWeight: number
  chapterWeightedScore: number
  grade: string
  status: string
}

export interface ScoreParameter {
  id: number
  formName: string
  fields: ScoreField[]
  formTotal: number
}

export interface ScoreField {
  id: number
  name: string
  score: number
}

export interface ProjectInfo {
  id: number
  projectName: string
  studentName: string
  studentNrp: number
}
