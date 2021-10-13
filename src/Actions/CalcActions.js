export const Plus = (a, b) => {
	return{
		type: "PLUS",
		payload1: a,
		payload2: b
	}
}
export const Minus = (a, b) => {
	return{
		type: "MINUS",
		payload1: a,
		payload2: b
	}
}
export const Multiple = (a, b) => {
	return{
		type: "MULTIPLE",
		payload1: a,
		payload2: b
	}
}
export const Division = (a, b) => {
	return{
		type: "DIVISION",
		payload1: a,
		payload2: b
	}
}
