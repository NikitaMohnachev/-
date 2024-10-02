function select () {

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hiden');

	// Клик по кнопке. Открыть/закрыть select
	dropDownBtn.addEventListener('click', function () {
		dropDownList.classList.toggle('dropdown__list--visible');
	});


	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун.
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун.
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn)
		{
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

});
};

export default select;