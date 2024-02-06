const scrollToElement = (targetId, offset = -50) => {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offsetPosition = targetElement.offsetTop + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default scrollToElement;
