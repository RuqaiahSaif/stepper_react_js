const InputComponent = ({
  onChange,
  value,
  id,
  name,
  type,
  placeholder,
  className,
  onBlur,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      onBlur={onBlur}
    />
  );
};

export default InputComponent;
