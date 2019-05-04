
export default (state:any, action:any) => {
    switch (action.type) {
      case 'INCREMENT': 
        return {count:state.count+1}
      case 'DECREMENT':
        return {
          count:state.count-1
        }
      default:
        return state
    }
  }