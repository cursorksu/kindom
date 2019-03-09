$(function () {
    $(".players").niceScroll();

    var player;
    $('.players').on('click', function(event) {
        var target = event.target;
        var li = target.closest('li');
        if (!li) return;
        highlight(li);
    });
    function highlight(node) {
        if (player) {
            player.classList.remove('active');
        }
        player = node;
        player.classList.add('active');
    }
    const user =  {
        img: '../images/rem/avatar/1-1.png',
        nick: 'nick',
        stars: 'stars',
        isActive: false
    }


    // Создадим следующий объект
    var obj = { "user": "Vadim", "avatar": 'images/rem/avatar/1_1.png', "stars": [0,1,2,3,4,5], "isActive": false }

// Сериализуем его
    var sObj = JSON.stringify(obj)
// После этого sObj принимает строковое значение {"foo":"bar","array":[1,2,3]}

// Запишем в localStorage с ключём object
    localStorage.setItem("object", sObj)

// Обратимся к localStorage следующим образом
// Хранилище вернёт нашу сериализованную строку {"foo":"bar","array":[1,2,3]}
    localStorage.object

// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript
    var retObj = JSON.parse(localStorage.getItem("object")).stars
    console.log(localStorage.length)
    console.log(localStorage.key("avatar"))
    console.log(localStorage.getItem("object", sObj))


    // Создадим следующий объект
    var masha = { "user": "Masha", "avatar": 'images/rem/avatar/2_1.png', "stars": 10, "isActive": false }

// Сериализуем его
    var sMasha = JSON.stringify(masha)
// После этого sObj принимает строковое значение {"foo":"bar","array":[1,2,3]}

// Запишем в localStorage с ключём object
    localStorage.setItem("mashenka", sMasha)

// Обратимся к localStorage следующим образом
// Хранилище вернёт нашу сериализованную строку {"foo":"bar","array":[1,2,3]}
    localStorage.mashenka

// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript
    var mashenkaM = JSON.parse(localStorage.getItem("mashenka")).stars
    console.log(mashenkaM)
    console.log(JSON.parse(localStorage.getItem("mashenka")).avatar)
    console.log(localStorage.getItem("mashenka", sMasha))
// localStorage.clear()
// В итоге объекты obj и retObj абсолютно одинаковы

});
// localStorage.length - кількість елементів даних що зберігаються.
//     Методи:
// localStorage.key() - ім'я ключа за його індексом.
// localStorage.getItem() - поверне значення ключа.
// localStorage.setItem() - додає значення або оновлює якщо ключ вже існує.
// localStorage.removeItem() - видаляє елемент за назвою ключа.
// localStorage.clear() - очищає локальне сховище даних браузера.
