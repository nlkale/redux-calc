import { connect } from "react-redux";
import { Minus, Plus, Multiple, Division } from "../../Actions/CalcActions";


import "./Calc.css";




const Calc = ({result, Plus, Minus, Multiple, Division}) => {

	let a, b, mark;
	const res = () => {
		if(mark === "+"){return Plus(a,b)}
		else if(mark === "-"){return Minus(a,b)}
		else if(mark === "*"){return Multiple(a,b)}
		else if(mark === "/"){return Division(a,b)}
	}

	return(
			<div className="container">
				<div className="row">
					<div className="col center">
						<div className="input-group">
							<input type="text" className="form-control operands" onChange={ event => a = event.target.value} placeholder="2"/>
							<select className="form-select operands1" onChange={ event => mark = event.target.value}>
								<option></option>
  								<option defaultValue="+">+</option>
  								<option defaultValue="-" >-</option>
  								<option defaultValue="*" >x</option>
  								<option defaultValue="/" >/</option>
							</select>
							<input type="text" className="form-control operands" onChange={ event => b = event.target.value} placeholder="2"/>
							<button type="button" className="btn btn-success" onClick={()=>{res()}}>=</button>
							<span className="input-group-text">{result}</span>
  						</div>
					</div>
				</div>
			</div>
	)
};

const mapStateToProps = ({ CalcReducer }) => {
	const {result} = CalcReducer;
	return {result};
};

const mapDispatchToProps = {
	Minus, Plus, Multiple, Division
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);