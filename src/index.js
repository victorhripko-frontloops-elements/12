import './style.scss';

(() => {
  const formText = document.querySelector('.form__text');
  const checkAll = document.querySelector('.check--all > .check__input');
  const checkDefault = document.querySelectorAll('.check--default > .check__input');
  const checkboxes = document.querySelectorAll('.check__input');

  const visibleCount = 2;

  const showChecked = () => {
    const checkedValues = [...checkDefault]
      .filter((check) => check.checked)
      .map((check) => check.value);

    const valuesCount = checkedValues.filter((item, id) => id < visibleCount);
    const countMore = Math.abs(valuesCount.length - checkedValues.length);

    formText.textContent = countMore
      ? valuesCount.join(', ') + ` and ${countMore} more`
      : valuesCount.join(', ') || 'Please, select your food';

    checkAll.checked = checkedValues.length === checkDefault.length;
  };

  checkAll.addEventListener('change', () => {
    const checkedInputs = [...checkDefault].filter((el) => el.checked);
    const needCheck = checkedInputs.length !== checkDefault.length;
    checkDefault.forEach((el) => (el.checked = needCheck));
  });

  checkboxes.forEach((el) => el.addEventListener('change', showChecked));

  showChecked();
})();
