const FIREBASE_ADRESS =
  "https://autojedynka-projekt-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const getCoursePrices = async () => {
  const response = await fetch(
    `${FIREBASE_ADRESS}/prices/-ND3Yh3EinKf39M2WlYu.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch prices");
  }

  const loadedPrices = { id: "-ND3Yh3EinKf39M2WlYu", ...data };
  return loadedPrices;
};

export const getPosts = async () => {
  const response = await fetch(`${FIREBASE_ADRESS}/Posts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch posts");
  }

  const loadedPosts = [];

  for (const key in data) {
    const postObj = {
      id: key,
      ...data[key],
    };

    loadedPosts.push(postObj);
  }
  return loadedPosts;
};

export const updatePrices = async (priceData) => {
  const response = await fetch(
    `${FIREBASE_ADRESS}/prices/-ND3Yh3EinKf39M2WlYu.json`,
    {
      method: "PATCH",
      body: JSON.stringify(priceData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update prices");
  }

  return null;
};

export const updatePosts = async (postsData) => {
  const id = postsData.id;

  const response = await fetch(`${FIREBASE_ADRESS}/Posts/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(postsData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update post");
  }

  return null;
};

export const addPosts = async (postsData) => {
  const response = await fetch(`${FIREBASE_ADRESS}/Posts.json`, {
    method: "POST",
    body: JSON.stringify(postsData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add post");
  }

  return null;
};
