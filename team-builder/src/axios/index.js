import { v4 as uuid } from 'uuid'

const initialMemberList = [
  {
    id: uuid(),
    name: 'Bob',
    email: 'bob@billy.com',
    role: 'Backend Engineer',
  },
  {
    id: uuid(),
    name: 'Joe',
    email: 'joe@dirt.com',
    role: 'Frontend Engineer',
  },
]

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMemberList })
  },
  post(url, { name, email, role }) {
    const newFriend = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}
