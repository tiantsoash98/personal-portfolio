export default () => {
    var ellipses = null
    var fieldY = 0
    var positionX = 0
    var positionY = 0
    var scale = 1
    var wrapper = null

    const initEllipse = () => {
        ellipses = document.querySelectorAll('.ellipse__field')

        ellipses.forEach((ellipse) => {
            wrapper = ellipse.querySelector('.ellipse__wrapper')
            fieldY = ellipse.dataset.fieldY || 0
            positionX = ellipse.dataset.positionX || 0
            positionY = ellipse.dataset.positionY || 0
            scale = ellipse.dataset.scale || 1

            ellipse.style.top = fieldY + '%'
            wrapper.style.top = positionY + '%'
            wrapper.style.left = positionX + '%'
            wrapper.style.transform = 'scale(' + scale + ')'
        })
    }

    const destroyEllipse = () => {
        if(ellipses)
            ellipses = null
    }

    return { 
        initEllipse,
        destroyEllipse
    }
}