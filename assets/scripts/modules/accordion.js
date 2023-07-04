export const accordion = () => {

  const accordionButton = document.querySelector(".p-gmenu__button");
  const table = document.querySelector(".p-gmenu--table");
  const list = document.querySelector(".p-gmenu__list.in-table");
  //クリックで動く
  accordionButton.addEventListener('click', () => {
    accordionButton.classList.toggle('active');
    table.classList.toggle('c-background--opacity');
    list.classList.toggle('active');
  });
};