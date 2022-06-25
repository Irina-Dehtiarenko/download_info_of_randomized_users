const url = 'https://randomuser.me/api/'

const divUsers = document.querySelector('div.user-list')
const button = document.querySelector('form input.button')

fetch(url)
	.then((response) => {
		console.log(response)
		if (!response.ok) {
			throw new Error('Invalid url address')
		} else {
			return response.json()
		}
	})
	.then(data => {
		//console.log(data)//zwraca dane jednego użytkownika losowo
		showUser(data.results[0])
	})
	.catch(err => console.error(err))

const showUser = (data) => {
	console.log(data.gender)
	console.log(data.name.title)// .first / .last
	console.log(data.picture.thumbnail)// małe, średnie - medium, duże - large
	let users = []
	let number = 10
	// divUsers.style.display = 'block'

	for (let i = 0; i < number; i++) {
		const divUser = document.createElement('div')
		divUser.classList.add('user')
		console.log(divUser)
		const imgUser = document.createElement('img')
		const h2Fullname = document.createElement('h2')

		imgUser.src = data.picture.medium
		h2Fullname.textContent = `${data.name.title} ${data.name.first} ${data.name.last}`

		divUser.appendChild(imgUser)
		divUser.appendChild(h2Fullname)
		divUsers.appendChild(divUser)
	}
	// users.forEach(user => {

	// });

	// for (let i = 0; i < 10; i++) {
	// 	users.push(`${ data.name.title } ${ data.name.first } ${ data.name.last } `)
	// 	divUsers.textContent = users
	// 	//`${ data.name.title } ${ data.name.first } ${ data.name.last } `
	// }

	console.log(users)
}

// divUsers.style.display = 'block'  // po kliknięciu w button -> funkcja i tam to ustalić



