import PropTypes from 'prop-types';
import monthJsonData from '../assets/monthData';

const CurrentyearDetails = ({ curYear }) => {
    const monthData = monthJsonData[curYear];

    return (
        <>
            {Object.keys(monthData).map((month) => (
                <>
                    <div key={month} className="monthly-details">
                        <h2>{month}</h2>
                        {/* Income Section */}
                        <div className="grid-container">
                            <div className="grid-column">
                                <div className="column-title">Income</div>
                                {monthData[month].Income.map((income) => (
                                    <div className="row" key={income}>
                                        <label>{income}:</label>
                                        <input type="text" name={`income-${income}`} />
                                    </div>
                                ))}
                                <button onClick={()=>{handleData('Anand', 124)}}>Save</button>
                            </div>
                        </div>
                        {/* Expenses Section */}
                        <div className="grid-container">
                            <div className="grid-column">
                                <div className="column-title">Expenses</div>
                                {monthData[month].Expenses.map((expense) => (
                                <div className="row" key={expense}>
                                    <label>{expense}:</label>
                                    <input type="text" name={`expense-${expense}`} />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
                    
            ))}
        </>
    )
}

CurrentyearDetails.propTypes = {
    curYear: PropTypes.number.isRequired
}

export default CurrentyearDetails;