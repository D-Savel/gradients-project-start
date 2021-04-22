import { gradients } from "./gradients"
import GradientApp from "./components/GradientsApp"
import { useState } from "react"


function App() {
  const [tagSelect, setTagSelect] = useState('tous')
  return (
    <GradientApp
      gradients={gradients}
      tagSelect={tagSelect}
      setTagSelect={setTagSelect}>
    </GradientApp>
  )
}

export default App
