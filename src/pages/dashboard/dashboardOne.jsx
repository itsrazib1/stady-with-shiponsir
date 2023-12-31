import { useState, useEffect } from 'react';

const DashboardOne = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://stady-with-shiponsir-server.vercel.app/logindata')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const updateRole = async (userId, newRole) => {
        try {
          const response = await fetch(`https://stady-with-shiponsir-server.vercel.app/logindata/${userId}`, {
            method: 'PATCH', // Use PATCH method
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Role: newRole }),
          });
    
          if (response.ok) {
            // If the update was successful, fetch the updated data
            const updatedData = await fetch('https://stady-with-shiponsir-server.vercel.app/logindata')
              .then((response) => response.json())
              .catch((error) => console.error('Error fetching updated data:', error));
    
            setData(updatedData);
          } else {
            console.error('Failed to update role');
          }
        } catch (error) {
          console.error('Error updating role:', error);
        }
      };
    return (
        <div>
            <div className="pt-20 px-0 min-h-screen lg:px-40 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Info</th>
                            <th>Details</th>
                            <th className='hidden sm:block'>College Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the data array */}
                        {data.map((item, index) => (
                            <tr key={index}>

                                <td>
                                    <div className="flex text-center items-center gap-1 lg:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold lg:text-base text-xs ps-1">{item.name}</div>
                                            <div className="lg:text-sm text-xs opacity-50 ps-1 text-start">{item.Batch}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.Date}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.Time}</span>
                                </td>
                                <td className='hidden sm:block mt-4'>Govt. Saadat College</td>
                                <td><div className="dropdown dropdown-end ">
                                    <div tabIndex={0} role="button" className="btn btn-success lg:btn-md btn-xs text-xs text-white ms-5 m-1">{item.Role}</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a><div onClick={() => updateRole(item._id, 'Student')} className='btn btn-error btn-xs text-white '>Make Student</div></a></li>
                                        <li><a><div onClick={() => updateRole(item._id, 'Captain')} className='btn btn-accent btn-xs text-white'>Make captain</div></a></li>
                                        
                                    </ul>
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardOne;
