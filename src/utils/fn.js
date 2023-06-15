export  const titlePick = (length) => {
    let titles = {
        short: "Todo List",
        medium: "Todooo List",
        long: "Todooooooooo List",
     }

    if (length <= 16) {
         return titles.short
        } else if (length <= 32){
         return titles.medium
    } else return titles.long
     }