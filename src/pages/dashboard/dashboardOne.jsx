import { useState, useEffect } from 'react';

const DashboardOne = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/logindata')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className="pt-20 px-0  lg:px-40 overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Info</th>
                            <th>Details</th>
                            <th>Payment Status</th>
                            <th className='hidden sm:block'>College Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the data array */}
                        {data.map((item, index) => (
                            <tr key={index}>

                                <td>
                                    <div className="flex text-center items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">{item.Batch}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.Date}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.Time}</span>
                                </td>
                                <td>🆗</td>
                                <td className='hidden sm:block mt-4'>Govt. Saadat College</td>
                                <td><div className="dropdown dropdown-end -ms-10">
                                    <div tabIndex={0} role="button" className="btn btn-success lg:btn-md btn-xs text-white m-1">{item.Role}</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a><div className='btn btn-error btn-xs text-white'>Make Student</div></a></li>
                                        <li><a><div className='btn btn-accent btn-xs text-white'>Make Moderator</div></a></li>
                                        
                                        <li><a><div className='btn btn-info btn-xs text-white'>Make Admin</div></a></li>
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
