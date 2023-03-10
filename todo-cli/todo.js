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
      let output = "";
      const toDay = new Date();
      list.forEach((item)=>{
        const title = item.title;
        const dueDate = item.dueDate;
        const isCompleted = item.completed;
        const displayDate = (dueDate === new Date().toISOString().split("T")[0]) ? "toDay": dueDate;
        if(dueDate==today){
            output+= `[${isCompleted ? "x":" "}] ${title}\n`;
        }
        else if(dueDate>=today){
            output+= `[${isCompleted ? "x":" "}] ${title} ${displayDate}\n`;   
        }
        else{
            output+= `[${isCompleted ? "x":" "}] ${title} ${displayDate}\n\n`;
        }

        
      });
      return output;
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
  };
  
  module.exports = todoList;