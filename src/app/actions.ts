"use server";

export async function signIn(data: Record<string, any>) {
  return (
    await fetch("http://119.29.239.184:8888/api/register", {
      method: "post",
      body: JSON.stringify(data),
    })
  ).json();
}

export async function login(data: Record<string, any>) {
  return (
    await fetch("http://119.29.239.184:8888/api/login", {
      method: "post",
      body: JSON.stringify(data),
    })
  ).json();
}
