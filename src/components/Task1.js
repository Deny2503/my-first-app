import React from "react";

function ReactAppArchitecture() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Архітектура React-додатка</h1>
      <p>
        React-додаток складається з компонентів, які можна вкладати один в одного. Дані передаються згори вниз через <b>props</b>. Для управління станом використовують <b>state</b> та сторонні бібліотеки (наприклад, Redux або Context).
      </p>
      <img
        src="https://habrastorage.org/r/w1560/files/b58/8ec/9ac/b588ec9acf7b41b196ba8dc9735eb943.png"
        style={{ width: "100%", maxWidth: 500, display: "block", margin: "24px auto", borderRadius: "10px", boxShadow: "0 2px 8px #ccc" }}
      />
      <h2>Плюси React</h2>
      <ul>
        <li>Компонентний підхід: легко підтримувати та використовувати повторно.</li>
        <li>Віртуальний DOM: висока продуктивність при оновленнях.</li>
        <li>Велика спільнота та екосистема.</li>
        <li>Декларативність: простіше зрозуміти, як все працює.</li>
        <li>Підходить для SPA (Single Page Application).</li>
        <li>Якщо вдруг перестане працювати одна функция то нічого страшного не станется в той час як на js все монолітом тобто всі функції завісят один від одного </li>
      </ul>
      <h2>Мінуси React</h2>
      <ul>
        <li>Часті оновлення та зміни API.</li>
        <li>JSX може бути незвичним для початківців.</li>
        <li>Великий розмір додатку для маленьких проектів.</li>
        <li>Тільки View-частина: треба підключати додаткові бібліотеки.</li>
        <li>Потрібно налаштовувати інструменти розробки.</li>
      </ul>
    </div>
  );
}

export default ReactAppArchitecture