import './App.css';
import axios from './axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MemberForm from './form'
import Member from './member'

const initialForm = {
  name: '',
  email: '',
  role: ''
}

const Wrapper = styled.div`
  width:95%;
  margin:auto;
  .team {
    width:95%;
    margin:5% auto 0;
  }
  .curTeam {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
  }
  .member {
    background-color:rgba(250,0,50,.1);
    width: 40%;
    margin:2%;
    border: 1px solid black;
    border-radius:10px;
    padding:15px;
  }
  .member h2 {
    margin:auto;
  }
  h1, h2, h3, h4 {
    color: firebrick;
  }
  h1 {
    width: 70%;
    margin: 2% auto;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  label {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  input, select, button {
    height: 1.5rem;
    width: 170px;
    margin: 8px 8px 8px 0;
    border-radius: 5px;
    border: 1px solid;
    padding: 0px 5px;
  }
  button {
    color: crimson;
    background-color: white;
    border: 1px solid crimson;
  
    &:disabled {
      cursor: not-allowed;
      color: darkgray;
      border-color: darkgray;
    }
  }
  .submit {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
  }
`

export default function App() {
  const [members, setMembers] = useState([])
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    axios.get('fakeapistuff.com').then(res => setMembers(res.data))
  }, [])

  const submit = () => {
    setMembers([...members, form])
    setForm(initialForm)
  }

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  return (
    <Wrapper>
      <h1>Team Member Form</h1>
      <MemberForm form={form} update={update} submit={submit} />
      <h2 className='team'>Current Team</h2>
      <div className='curTeam'>
        {
          members.map(member => {
            return (
              <Member key={member.id} details={member} />
            )
          })
        }
      </div>
    </Wrapper>
  )

}
