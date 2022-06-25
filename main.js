
const divUsers = document.querySelector('div.user-list')
const button = document.querySelector('form input.button')
const inputNumber = document.querySelector('form input.generator__input')


// https://randomuser.me/api/?results=10&gender=female
// https://randomuser.me/api/'

let number = ''

const getUser = (e) => {


	const url = `https://randomuser.me/api/?results=${number}`

	fetch(url)
		.then((response) => {
			// console.log(response)
			if (!response.ok) {
				throw new Error('Invalid url address')
			} else {
				return response.json()
			}
		})
		.then(data => {
			//console.log(data)

			//console.log(data.results)//zwraca dane użytkowników losowo
			showUser(data.results)
		})
		.catch(err => console.error(err))
}


const showUser = (users) => {
	console.log(users)

	users.forEach(user => {
		const divUser = document.createElement('div')

		divUser.classList.add('user')
		console.log(divUser)
		const imgUser = document.createElement('img')
		const h2Fullname = document.createElement('h2')

		imgUser.src = user.picture.medium
		h2Fullname.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`

		divUser.appendChild(imgUser)
		divUser.appendChild(h2Fullname)
		divUsers.appendChild(divUser)

	});
	//console.log(data.name.title) // .first / .last
	//console.log(data.picture.thumbnail) // małe, średnie - medium, duże - large
	// let number = 10
	// divUsers.style.display = 'block'



	// for (let i = 0; i < number; i++) {
	// 	const divUser = document.createElement('div')
	// 	divUser.classList.add('user')
	// 	console.log(divUser)
	// 	const imgUser = document.createElement('img')
	// 	const h2Fullname = document.createElement('h2')

	// 	imgUser.src = data.picture.medium
	// 	h2Fullname.textContent = `${data.name.title} ${data.name.first} ${data.name.last}`

	// 	divUser.appendChild(imgUser)
	// 	divUser.appendChild(h2Fullname)
	// 	divUsers.appendChild(divUser)
	// }

}

button.addEventListener('click', (e) => {
	e.preventDefault()
	// console.log(inputNumber)
	number = inputNumber.value

	// console.log(number)
	getUser()
	inputNumber.value = ''

})

// divUsers.style.display = 'block'  // po kliknięciu w button -> funkcja i tam to ustalić



