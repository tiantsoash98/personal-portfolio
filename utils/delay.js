
export default function (delay) {
	delay = delay || 2000

	return new Promise((done) => {
		setTimeout(() => {
			done()
		}, delay)
	})
}