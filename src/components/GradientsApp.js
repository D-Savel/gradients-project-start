import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const GradientApp = ({ gradients, tagSelect, setTagSelect }) => {
  return (
    <>
      <div>
        <main className="container">
          <h1 className="text-center my-4">Alyra Gradients</h1>
          < GradientsSelect
            tagSelect={tagSelect}
            setTagSelect={setTagSelect} />
          <GradientsList
            gradients={gradients}
            tagSelect={tagSelect}
            setTagSelect={setTagSelect} />
        </main>
      </div>
    </>
  )
}

export default GradientApp