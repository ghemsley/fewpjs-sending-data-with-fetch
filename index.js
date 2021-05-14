// Add your code here
const submitData = () => {
  return fetch('http://localhost:3000/users', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: 'Steve',
      email: 'steve@steve.com'
    })
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json)
      const p = document.createElement('p')
      p.textContent = json.id
      document.body.appendChild(p)
    })
    .catch((error) => {
      console.log(error)
      const p = document.createElement('p')
      p.textContent = error.message
      document.body.appendChild(p)
    })
}
