{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low'
    };

    //partial = optional
    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate }; // 기존 todo복사 후 fields로 덮어 씌운다.
    }

    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' })
    console.log(updated);
}