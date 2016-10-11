/*
Добавить в конструктор Article:

Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.

Использование:
*/

function Article() {
  this.created = new Date();
  if (Article.count == undefined) {
  	Article.count = 0;
  }
  
  Article.count++;
  Article.date = this.created;
}

Article.showStats = function() {
	alert('Всего:'+ this.count + ', Последняя: ' + this.date);
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)