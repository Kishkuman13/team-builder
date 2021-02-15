import React from 'react'

export default function MemberForm(props) {
  const { form, update, submit } = props

  const handleSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const handleChange = evt => {
    const {name, value} = evt.target
    update(name, value)
  }

  return (
    <div className='container'>
      <form className='form container' onSubmit={handleSubmit}>
        <div className='form-group inputs'>
          <label>
            Username
            <input 
              type='text'
              name='name'
              placeholder='your name'
              value={form.name}
              onChange={handleChange}
              />
          </label>
          
          <label>
            Email
            <input 
              type='email'
              name='email'
              placeholder='your email'
              value={form.email}
              onChange={handleChange}
              />
          </label>
          
          <label>
            Role
            <select
              name='role'
              value={form.role}
              onChange={handleChange}>
              <option>-- Select a Role --</option>
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option>Web Designer</option>
              <option>Senior Designer</option>
            </select>
          </label>
        </div>
        <div className='submit'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
