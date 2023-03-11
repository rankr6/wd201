const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueLater = all.filter(item=> item.dueDate<todaystr);
        return dueLater;
      }
    
  
    const dueToday = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueToday = all.filter(item=> item.dueDate===todaystr);
        return dueToday;
      }
    
  
    const dueLater = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueLater = all.filter(item=> item.dueDate>todaystr);
        return dueLater;
      }
    
  
      const toDisplayableList = (list) => {
        const toDay = new Date();
      
        const output = list.map((item) => {
          const title = item.title;
          const dueDate = item.dueDate === new Date().toLocaleDateString("en-CA") ? "" : item.dueDate;
          const isCompleted = item.completed ? "[x]" : "";
          const displayDate = (dueDate === new Date().toISOString().split("T")[0]) ? "toDay": dueDate;
      
          if (dueDate == today) {
            return `[${isCompleted}] ${title}\n`;
          } else if (dueDate >= today) {
            return `[${isCompleted}] ${title} ${displayDate}\n`;
          } else {
            return `[${isCompleted}] ${title} ${displayDate}\n\n`;
          }
        });
        return output.join("\n");
      }
    
      return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
      };
    
    }
  
 module.exports = todoList;
