const initialState = {
	result: "..."
}

const CalcReducer = (state = initialState, action) => {
	switch(action.type){
		case "PLUS":
			return{
				result: parseInt(action.payload1) + parseInt(action.payload2)
			}
		case "MINUS":
			return{
				result: parseInt(action.payload1) - parseInt(action.payload2)
			}
		case "MULTIPLE":
			return{
				result: parseInt(action.payload1) * parseInt(action.payload2)
			}
		case "DIVISION":
			return{
				result: parseInt(action.payload1) / parseInt(action.payload2)
			}
		
		default:
			return state;
	}
}

export default CalcReducer;