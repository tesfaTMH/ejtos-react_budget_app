import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
	const { dispatch } = useContext(AppContext);

	const handleChangeCurrency = (event) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: event.target.value,
		});
	};

	return (
		<div className="input-group">
			<div>
				<label className="input-group-text alert alert-info" htmlFor="inputGroupSelector01">Currency</label>  
			</div>

			<select className="alert alert-primary text-red bg-white" id="inputGroupSelector01" onChange={handleChangeCurrency}>  
				<option value="£" name="pound">£ Pound</option>
				<option value="$" name="dollar">$ Dollar</option>
				<option value="€" name="euro">€ Euro</option>
				<option value="₹" name="ruppee">₹ Ruppee</option>
			</select>
		</div>
	);
};

export default ChangeCurrency;