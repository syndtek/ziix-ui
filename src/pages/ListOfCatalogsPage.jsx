import React from 'react'
import { useParams, useActionData } from 'react-router-dom'

const ListOfCatalogsPage = () => {

  const params = useActionData()

  console.log(params)

  return (
    <div>ListOfCatalogsPage</div>
  )
}

export default ListOfCatalogsPage