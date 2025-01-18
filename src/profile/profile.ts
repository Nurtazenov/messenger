export function setProfile(element: HTMLDivElement) {

      element.innerHTML = `
    <div>
        <fieldset>
            <legend>
               <h2>Ваш профиль </h2>
            </legend>
            <p><img/></p>
            
            <p>Имя</p>
            <p>Почта</p>
            <hr>
            <p>Логин</p>
            <hr>
            <p>Имя</p>
            <hr>
            <p>Фамилия</p>
            <hr>
            <p>Имя в почте</p>
            <hr>
            <p>Телефон</p>
            <br>
            <p><a>Изменить данные</a></p>
            <hr>
            <p><a>Изменить пароль</a></p>
            <hr>
            <a>Выйти</a>

        </fieldset>
    </div>

`
}