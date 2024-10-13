import { defer } from "react-router-dom";
import { listData, singlePostData } from "./dummydata"; // Adjust the path as needed

export const singlePageLoader = async ({ params }) => {
  const post = singlePostData; // Use the single post data directly
  return post;
};

export const listPageLoader = () => {
  // Return the hardcoded data directly
  return { postResponse: listData }; // Wrap in an object if your existing code expects it that way
};

export const profilePageLoader = async () => {
  const postPromise = Promise.resolve(listData); // You can still use the dummy data if needed
  const chatPromise = Promise.resolve([]); // Assuming you don't have chat data in your dummy data
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
