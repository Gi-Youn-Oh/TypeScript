{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) { // 내장 유틸리티 타입 많음
        todo.title = 'jas';
    }
}