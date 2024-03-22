
export default function (delay) {
    delay = delay || 1000
	return new Promise((done) => {
		setTimeout(() => {
			done()
		}, delay)
	})
}