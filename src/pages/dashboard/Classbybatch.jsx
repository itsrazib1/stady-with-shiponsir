import { useEffect, useState } from "react";

const Classbybatch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://stady-with-shiponsir-server.vercel.app/studentsetails');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data initially
        fetchData();

        // Fetch data every minute (adjust the interval as needed)
        const intervalId = setInterval(fetchData, 60000);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Organize data by date and time
    const organizedData = data.reduce((acc, item) => {
        const key = `${item.Date} || ${item.Time} Batch`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});

    return (<>
        <div>

        </div>
        <div className='lg:px-10 px-3 grid lg:grid-cols-3 grid-cols-1 gap-3  p-4'>
            {Object.entries(organizedData).map(([dateTime, items, batchInfo]) => (
                <div className='border p-2 rounded-md' key={dateTime}>
                    <h2 className='text-center'>{batchInfo}</h2>
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Batch</th>
                                <th>Class</th>
                                {/* Add additional headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(new Set(items.map((item) => item.Role))).map((role) => (
                                <tr key={role}>
                                    <td><button className="btn ">

                                        <div className="badge lg:text-base text-xs">{dateTime}</div>
                                    </button></td>
                                    <td>

                                        <button className="btn">

                                            <div className="badge badge-secondary lg:text-base text-xs">{items.filter((i) => i.Role === role).length}</div>
                                        </button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </>

    );
};

export default Classbybatch;