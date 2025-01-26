const Table = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Table
