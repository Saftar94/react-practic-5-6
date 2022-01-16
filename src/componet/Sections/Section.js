const Section = ({ children, title }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
