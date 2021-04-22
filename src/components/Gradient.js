import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import GradientsTag from "./GradientsTag"

const Gradient = ({ colorStart, colorEnd, name, tag, setTagSelect, tagSelect }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <div className=" d-flex align-self-start my-2 ">
          <GradientsTag tag={tag} setTagSelect={setTagSelect} tagSelect={tagSelect} />
        </div>
      </div>
    </li>
  )
}

export default Gradient
