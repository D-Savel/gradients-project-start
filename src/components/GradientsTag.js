const GradientsTag = ({ tag, setTagSelect, tagSelect }) => {
    return (
        tag.map((el) => {
            return (
                <button
                    key={el}
                    onClick={() => setTagSelect(el)}
                    className="btn btn-sm btn-dark mx-auto me-1 mb-1 d-flex justify-content-between"
                    disabled={el === tagSelect}
                >
                    {el}
                </button >
            )
        }))
}


export default GradientsTag