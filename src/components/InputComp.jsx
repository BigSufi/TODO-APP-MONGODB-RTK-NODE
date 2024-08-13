function InputComp({
  type,
  name,
  value,
  onFunction,
  klass,
  placeholder = "Add Todo",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onFunction}
      className={`form-control ${klass}`}
    />
  );
}

export default InputComp;
