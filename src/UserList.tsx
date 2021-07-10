import React, {useEffect, useState} from "react";
import axios from "axios";

interface props {
  title: string;
  page: number;
}

const UserList: React.FC<props> = ({title, page}) => {
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    axios
        .get(
            "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
            {page} +
            "&results=10"
        )
        .then((res) => {
          setUser(res.data.results);
        });
  }, [page]);
  return (
      <div>
        <div className="text-3xl font-semibold text-red-500 w-48 mx-auto border-b-2 border-black pb-2">
          {title}
        </div>
        <div>
          <table className="table-auto w-full border-2 border-black mt-8">
            <thead>
            <tr>
              <th className="border-2 border-green-800 py-2">Name</th>
              <th className="border-2 border-green-800 py-2">Gender</th>
              <th className="border-2 border-green-800 py-2">E-mail</th>
            </tr>
            </thead>
            <tbody>
            {user.map((child: any) => (
                <tr className="border-2 border-green-800">
                  <td className="border-2 border-green-800 py-1">
                    {child.name.first + " " + child.name.last}
                  </td>
                  <td className="border-2 border-green-800">{child.gender}</td>
                  <td className="border-2 border-green-800">{child.email}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
export default React.memo(UserList);
