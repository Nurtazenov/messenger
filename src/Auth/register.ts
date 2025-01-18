document.querySelector<HTMLDivElement>('')!.innerHTML =`
     <div>
    <form method ="post">
    <h1>Регистрация</h1>
    <label>
    <input type ="text" placeholder= "Ваша почта" name ="mail" >
    </label>
    <label>
    <input type ="text" placeholder= "Ваш логин" name ="login" >
    </label>
     <label>
    <input type ="text" placeholder= "Ваше имя" name ="first_name" >
    </label>
     <label>
    <input type ="text" placeholder= "Ваше фамилие" name ="last_name" >
    </label>
     <label>
    <input type ="number" placeholder= "Ваш номер телефона" name ="phone" >
    </label>
    <label>
    <input type ="password" placeholder= "Ваш пароль" name ="password" >
    </label>
    <label>
    <input type ="password" placeholder= "Ваш пароль (ещё раз)" name ="password" >
    </label>

    {{> button label="Зарегистрироваться}}
    <a>Войти</a>
    </form>
    </div>
`