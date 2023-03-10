const todoList = require('../todo');

const {all, add,markAsComplete} = todoList();

describe("TodoList test Check", () => {
    test("Should add todo", () => {
        expect(all.length).toBe(0);
        add({
            title: "Test todo",
            complted: "false",
            dueDate: new Date().toISOString().split("T")[0]
        });
        expect(all.length).toBe(1);
    });
});


