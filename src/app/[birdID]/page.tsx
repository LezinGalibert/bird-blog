export default function BirdDescription(parameters: { params: { birdID: string } }) {
  return <p className="flex min-h-screen flex-col items-center p-24 ">This is {parameters.params.birdID}</p>;
}
