import React from 'react'
import { handleAuthentication } from '../../services/auth'

const Github = () => {
  handleAuthentication('github')

  return (
    <div className="container section has-text-centered">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="is-size-5">You are about to sign in using Github</h1>
        </div>
      </div>
    </div>
  )
}

export default Github
