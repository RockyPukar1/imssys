const Button = ({ className, children, style }) => (
  <button className={`${className}`} style={style}>
    {children}
  </button>
)

export default Button;