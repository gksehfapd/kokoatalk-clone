const nowTime = document.querySelector('.currentTime')

let today = new Date()

let hours = today.getHours()
let minutes = ('0' + today.getMinutes()).slice(-2)

let currentTime = `${hours}:${minutes}`
nowTime.innerText = currentTime

navigator.getBattery().then((battery) => {
	const charging = battery.charging
	console.log(battery.level)
	console.log(charging)
	const batteryLevel = document.getElementById('battery-level')
	batteryLevel.innerText = battery.level * 100 + '%'
	if (charging == false) {
		document.getElementById('bolt').classList.remove('fa-bolt')
	} else if (charging == true) {
		document.getElementById('bolt').classList.add('fa-bolt')
	} else {
		return
	}
})
