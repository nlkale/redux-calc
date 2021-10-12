import { connect } from "react-redux";
import { Mark } from "../../Actions/CalcActions";


import "./Calc.css";


const Calc = ({result, Mark}) => {
	return(
			<div className="container">
				<div className="row">
					<div className="col center">
						<div className="input-group">
							<input type="text" className="form-control operands" pattern="2"/>
							<select className="form-select operands1" onChange={(event)=>Mark(event.target.value)}>
  								<option defaultValue="+">+</option>
  								<option defaultValue="-" >-</option>
  								<option defaultValue="*" >x</option>
  								<option defaultValue="/" >/</option>
							</select>
							<input type="text" className="form-control operands" pattern="2"/>
							<span className="input-group-text">=</span>
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
	Mark
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);