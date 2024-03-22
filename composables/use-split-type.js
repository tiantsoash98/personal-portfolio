import SplitType from "split-type";

export default () => {
    const splits = ref(null)

    const initSplitType = () => { 
        createSplit()
        // Reset split type on screen resize
        window.addEventListener("resize", resetSplit)
    }

    const createSplit = () => {
        splits.value = SplitType.create('.split-type', {
            types: 'lines, words',
            lineClass: 'split-type--line-wrapper',
            wordClass: 'split-type--word'
        }) 

        // Wrap each line inside a div to allow text reveal by line
        document.querySelectorAll('.split-type--line-wrapper')
            .forEach(function(lineWrapper){
                // Create div
                var line = document.createElement('div')
                line.classList.add('split-type--line')
                line.innerHTML = lineWrapper.innerHTML
                // Insert created div inside line wrapper
                lineWrapper.innerHTML = ""
                lineWrapper.appendChild(line)
            })
    }

    const revertSplit = () => {
        SplitType.revert('.split-type') 
    }

    const resetSplit = () => {
        revertSplit()
        createSplit()
    }

    const destroySplitType = () => {
        revertSplit()
    }

    return { 
        initSplitType,
        destroySplitType
    }
}