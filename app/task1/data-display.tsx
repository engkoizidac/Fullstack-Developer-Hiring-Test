"use client";

import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function fetchPosts(): Promise<Post[]> {
  //implement promise due to fetch is asynchronous
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Something went wrong!"); //error handler in case of error occur
      }
      return response.json();
    }
  );
}

export default function DataDisplay() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetchPosts()
      .then((posts) => {
        setData(posts.slice(0, 5)); //Get 1st 5 post data
      })
      .catch((error) => {
        console.error("Error fetching posts:", error); //error handler in case of error occur
      })
      .finally(() => {
        setIsLoading(false); //reset isLoading state
      });
  }, []);

  return (
    <div className="pt-4">
      <h2 className="text-2xl">First 5 Blog Post</h2>
      {isLoading ? (
        <p>Retreiveing First 5 Post Data...</p> //display info to user while loading in case of delay
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
