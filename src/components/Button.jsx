const Button = ({content, func, classList}) => {
  return (
    <button className={classList}  onClick={()=>func(content)}>{content}</button>
  )
}
export default Button