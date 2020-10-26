export const horizontalScroll = (e, target) => {
    const toLeft = e.deltaY < 0 && target.scrollLeft > 0;
    const toRight = e.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientHeight;

    if(toLeft || toRight) {
        target.scrollLeft += e.deltaY;
    }
}