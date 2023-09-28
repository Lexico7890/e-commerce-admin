import React from 'react'

const PageUser = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      Parametros <span>{params.id}</span>
    </div>
  )
}

export default PageUser
