# NotesRedactor
___
## Task
#### Разработать одностраничное приложение (предпочтителен Angular 2+, можно как альтернативу использовать другой фреймворк) : текстовый редактор заметок с тегами.
Действия:
- Создание, редактирование, просмотр и удаление заметок;
- Фильтр заметок по тегу;
- Добавление и удаление тегов из списка.
- Данные хранить в json- файле.
- Использование CSS препроцессора.
___
Примечания:
Во время редактирования заметки пользователь может создавать теги, используя символ #.
Например: пользователь вводит текст “I wanna go to #shop”. По мере (окончании) ввода должен создаться соответствующий тег и отобразиться в списке под текстовым полем.
При редактировании заметки все слова, соответствующие тегам, должны подсвечиваться.

# Get started
___
#### Clone the repository.
		git clone https://github.com/Tarsupon/NotesRedactor.git
		cd app	
#### Install npm packages. Install the npm packages described in the package.json and verify that it works:	
		npm install
#### Start fake server, type in terminal the following
    		server-json --watch db.json
    		npm start
		    
After all open browser and type in search field http://localhost:4200.
