export function setLogin(element: HTMLDivElement) {

          element.innerHTML = `
    <div>
    <form method ="post">
     <fieldset>
            <legend>
             <h2>Вход</h2>
            </legend>
    
    <label>
    <input type ="text" placeholder= "Ваш логин" name ="login" >
    </label>
    <br/>
    <label>
    <input type ="password" placeholder= "Ваш пароль" name ="password" >
    </label>
    <br/>
    <button type="submit">Авторизоваться</button>
    <br/>
    <a>Нет аккаунта?</a>
    </fieldset>
    </form>
    </div>
`
}