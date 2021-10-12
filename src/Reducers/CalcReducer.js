const initialState = {
	first: 5,
	second: 2,
	result: ""
}

const CalcReducer = (state = initialState, action) => {
	switch(action.type){
		case "MARK":
			if(action.payload === "+"){
				return{
					result: state.first + state.second
				}
			}
			if(action.payload === "-"){
				return{
					result: state.first - state.second
				}
			};
			if(action.payload === "*"){
				return{
					result: state.first * state.second
				}
			};
			if(action.payload === "/"){
				if(action.second === 0){
					return {result: 0}
				} 
				else { return{ result: state.first / state.second } }
				
			};
			break
		case "FIRST":
			
			
		default:
			return state;
	}
}

export default CalcReducer;