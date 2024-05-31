"use server";
export async function getPopularMovies() {
  const res = await fetch(
    `127.0.0.1:8000/api/users_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
