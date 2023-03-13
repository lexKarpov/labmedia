export default function getUsers(){
  return fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users').then(res => res.json())
}