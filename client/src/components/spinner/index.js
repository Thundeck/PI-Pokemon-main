import React from 'react'
import s from './spinner.module.css'

const Spinner = () => {
  return (
    <section>
        <article>
            <div className={`${s.uflip}${s.opokeball}`}></div>
        </article>
    </section>
  )
}

export default Spinner