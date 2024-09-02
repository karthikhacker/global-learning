
const TextInput = ({ placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered input-info w-full max-w-xs"
        />
    )
}

export default TextInput