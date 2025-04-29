import { ScoreDetail } from '@/types/detailScore'

export const emptyScoreDetail: ScoreDetail = {
  id: 0,
  note: '',
  sign: '',
  parameters: [],
  project: {
    id: 0,
    projectName: '',
    studentName: '',
    studentNrp: 0,
  },
  chapterWeight: 0,
  chapterWeightedScore: 0,
  grade: '',
  status: '',
}
