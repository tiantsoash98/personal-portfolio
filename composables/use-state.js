export const usePageTransition = () => useState("pageTransition", () => false)
export const useLocalTimeState = () => useState("localTime", () => "00:00:00 AM GMT+3")
export const useHeaderMenuState = () => useState("headerMenuState", () => "close") // close / animating-open / open / animating-close
export const useHeaderStartAnimateScrollPosition = () => useState("headerStartAnimateScrollPosition", () => 150)
export const useScrollDownState = () => useState("scrollDown", () => false)
export const useScrollPositionState = () => useState("scrollPosition", () => 0)