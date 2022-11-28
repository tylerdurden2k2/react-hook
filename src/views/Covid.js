import "./Covid.scss";
import useFetch from "../fetches/useFetch";
import moment from "moment";

const Covid = (props) => {
    const today = moment().startOf("day").toISOString(true);
    const prevDate = moment()
        .startOf("day")
        .subtract(30, "days")
        .toISOString(true);
    const { data: dataCovid, isLoading } = useFetch(
        `https://api.covid19api.com/country/vietnam?from=${prevDate}&to=${today}`,
        true
    );
    return (
        <>
            <h1>Covid data</h1>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <table className="table-covid">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Recovered</th>
                        </tr>
                        {dataCovid &&
                            dataCovid.length > 0 &&
                            dataCovid.map((item) => {
                                return (
                                    <tr key={item.ID}>
                                        <td>{item.Date}</td>
                                        <td>{item.Confirmed}</td>
                                        <td>{item.Deaths}</td>
                                        <td>{item.Active}</td>
                                        <td>{item.Recovered}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Covid;
