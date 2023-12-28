import  { useState, useEffect } from 'react';

const Timewise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/studentsetails');
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
    const key = `${item.date}_${item.time}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className='px-10 grid grid-cols-3 gap-3  p-4'>
      {Object.entries(organizedData).map(([dateTime, items]) => (
        <div className='border p-2 rounded-md' key={dateTime}>
          <h2 className='text-center'>{dateTime}</h2>
          <table className="table table-zebra  ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Batch</th>
                <th>Role</th>
                {/* Add additional headers as needed */}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.batch}</td>
                  <td>{item.role}</td>
                  {/* Add additional cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Timewise;
