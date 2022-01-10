import React from 'react'

export default function Form() {


  return (
    <div>
      <Form>
        <label>Name </label>
        <input type="text"  placeholder='input name' />
        <label>Pronunciation </label>
        <input type="text"  placeholder='how to pronunce?' />
        <label>Meaning </label>
        <input type="text"  placeholder='what is name meaning?' />
        <label>History of name </label>
        <input type="text" placeholder='little bit of history' />
        <button>Submit</button>
      </Form>
    </div>
  )
}
