import { uniqueTags } from '../gradients'
const GradientsSelect = (props) => {
  const { tagSelect, setTagSelect } = props
  return (
    <form className="input-group-text mb-3">
      <label className="input-group-text" htmlFor="select">Filtrer par tag</label>
      <select
        className="form-select"
        id="select" aria-label="tag select"
        value={tagSelect}
        onChange={(event) => setTagSelect(event.target.value)}
      >
        <option defaultValue='tous'>tous</option>
        {uniqueTags.map((e) => (
          <option key={e} value={e} >{e}</option>
        ))
        }

      </select>
    </form>
  )
}

export default GradientsSelect