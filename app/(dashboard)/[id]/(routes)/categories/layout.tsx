const LayoutCategories = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <header className="bg-custom-dark-grey m-4 flex flex-col justify-center p-2">
        <h1 className='text-2xl font-bold text-custom-purple-neon'>Categorías</h1>
        <h5 className=''>Crea secciones para tus productos</h5>
      </header>
      <article>{children}</article>
    </section>
  )
}

export default LayoutCategories
