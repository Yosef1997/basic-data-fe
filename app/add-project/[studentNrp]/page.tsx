import OverlayAddProject from './_component/OverlayAddProject'

type Props = {
  params: Promise<{
    studentNrp: string
  }>
}
const AddProject: React.FC<Props> = async ({ params }) => {
  return <OverlayAddProject studentNrp={(await params).studentNrp} />
}
export default AddProject
