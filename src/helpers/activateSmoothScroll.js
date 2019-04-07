const activateSmoothScroll = (targetElement) => {

    const timer = setInterval(() => {
      const targetElementTop = targetElement.getBoundingClientRect().top;

      if (targetElementTop <= 0) {
        clearInterval(timer);
      } else if (targetElementTop <= 10) {
        window.scrollBy(0, 1);
      } else {
        window.scrollBy(0, 17);
      }

    }, 10);

    document.onwheel = () => {
      clearInterval(timer);
    }
}

export default activateSmoothScroll;