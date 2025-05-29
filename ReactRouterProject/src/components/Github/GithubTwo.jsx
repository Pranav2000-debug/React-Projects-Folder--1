import { useLoaderData } from "react-router-dom";

// Optimized version
export default function GithubTwo() {
  const data = useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}

// The loader data is captured by useLoaderData hook
export const githubInfoLoader = async () => {
  let userDetails;
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    if (response.ok) {
      userDetails = await response.json();
    } else {
      throw new Error("Error Fetching Data" + `${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return -1;
  }
  return userDetails;
};
