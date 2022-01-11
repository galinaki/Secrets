import React from 'react'

export default function AddStar() {
  return (
    <div>
      <h2>Add a famous person with same name as yours</h2>
      <form>
        <label>First name</label>
        <br />
        <input type="text" placeholder='type first name' />
        <br />
        <label>Last name</label>
        <br />
        <input type="text" placeholder='type last name' />
        <br />
        <label>Info</label>
        <br />
        <textarea type="text" placeholder='tell us about this person'
          rows={8} />
        <br />
        <label>Photo</label>
        <br />
        <input type="text" placeholder='past link of photo' />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
