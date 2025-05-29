import React, { useEffect, useState } from 'react'

// This is fetching Data on component mount
// We can optimize it even more, for example when the user hovers over the link, PRE-FETCH the data and keep it ready for use
function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        if(response.ok) {
          const userDetails = await response.json();
          setData(userDetails);
        } else {
          throw new Error("Error Fetching Data" + `${response.status}`);
        }
      } catch(error) {
        console.log(error);
        return;
      }
    }
    fetchUserDetails();
  },[])
  console.log(data);
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" />
    </div>
  )
}

export default Github