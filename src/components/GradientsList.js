import Gradient from "./Gradient"

const GradientsList = ({ gradients, tagSelect, setTagSelect }) => {
  let newGradients = []
  if (tagSelect === 'tous') {
    newGradients = gradients
  }
  else {
    for (const gradient of gradients) {
      for (const tag of gradient.tags) {
        if (tag === tagSelect)
          newGradients.push(gradient)
      }
    }
  }
  return (
    <ul className="row list-unstyled">
      {newGradients.map((elem) => (
        < Gradient
          key={elem.name}
          colorStart={elem.start}
          colorEnd={elem.end}
          name={elem.name}
          gradients={gradients}
          tag={elem.tags}
          setTagSelect={setTagSelect}
          tagSelect={tagSelect}
        />
      ))
      }
    </ul >
  )
}

export default GradientsList
