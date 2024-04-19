const counterDiv = document.querySelectorAll(".counter-container");

counterDiv.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const initialCount = Number(counter.innerHTML);

    if (initialCount < targetCount) {
      counter.innerHTML = `${Math.round(initialCount + targetCount / 100)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});
