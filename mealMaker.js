const menu = {
    _meal: '',
    _price: 0,
    set meal (mealToCheck){
      if(typeof mealToCheck== 'string'){
      this._meal = mealToCheck;
      }
    },
    set price (priceToCheck){
      if(typeof priceToCheck == 'number'){
        this._price = priceToCheck;
      } 
    },
    get todaySpecial(){
      if(this._meal && this._price){
        return `today's special is ${this._meal} only for  $${this._price}`
      } else {
        return "meal or price was not set correctly"
      }
    },
  };
  menu._meal = 'GhormeSabzi'
  menu._price = 5
  console.log(menu.todaySpecial)
  