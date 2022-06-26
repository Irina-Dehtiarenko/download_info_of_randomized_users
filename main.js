const divUsers = document.querySelector('div.user-list')
const button = document.querySelector('form input.button')
const inputNumber = document.querySelector('form input.generator__input')
const selectGender = document.querySelector('form select.generator__select')

let number = ''
let gender = 'both'

const getUser = () => {
	const url = `https://randomuser.me/api/?results=${number}&gender=${gender}`

	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Invalid url address')
			} else {
				return response.json()
			}
		})
		.then(data => {
			showUser(data.results)
		})
		.catch(err => console.error(err))
}

const showUser = (users) => {
	divUsers.style.display = 'flex'
	divUsers.textContent = ''

	users.forEach(user => {
		const divUser = document.createElement('div')
		divUser.classList.add('user')
		const imgUser = document.createElement('img')
		const h2Fullname = document.createElement('h2')

		imgUser.src = user.picture.medium
		h2Fullname.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`

		divUser.appendChild(imgUser)
		divUser.appendChild(h2Fullname)
		divUsers.appendChild(divUser)
	});
}

button.addEventListener('click', (e) => {
	e.preventDefault()
	number = inputNumber.value
	gender = selectGender.value

	if (number === '' || number === '0') {
		divUsers.textContent = ''
		divUsers.style.display = 'none'
		return alert('Musisz wpisać ilość użytkowników')
	} else {
		getUser()
	}
	inputNumber.value = ''
})