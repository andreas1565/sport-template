document.addEventListener('DOMContentLoaded', function () {
    const lib = {
        read: function (showHideElement, clickElement, fa, firstClick, fa2, secondClick, iconName) {
            const showHide = document.querySelector(showHideElement);
            const showHideButton = document.querySelector(clickElement);
            const icon = document.querySelector(iconName);
            document.querySelector(clickElement).addEventListener('click', function () {

                if (showHide.style.display !== 'block') {
                    showHide.style.display = 'block';
                    /* showHideButton.innerHTML = firstClick; */
                    icon.classList.remove(fa, firstClick);
                    icon.classList.add(fa2, secondClick);
                } else {
                    showHide.style.display = 'none';
                    icon.classList.remove(fa2, secondClick);
                    icon.classList.add(fa, firstClick);
                    /* showHideButton.innerHTML = secondClick */;
                }
            });
        }
    }
    lib.read('.hidebox1', '.toggle1', 'fa', 'fa-plus', 'fa', 'fa-minus', '.icon');
    lib.read('.hidebox2', '.toggle2', 'fa', 'fa-plus', 'fa', 'fa-minus', '.icon2');
    lib.read('.hidebox3', '.toggle3', 'fa', 'fa-plus', 'fa', 'fa-minus', '.icon3');
    lib.read('.hidebox4', '.toggle4', 'fa', 'fa-plus', 'fa', 'fa-minus', '.icon4');
});