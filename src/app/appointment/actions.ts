"use server";

export async function getDepartmentList() {
  const res = await fetch("http://119.29.239.184:8888/api/departmentList");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMeidcList() {
  const res = await fetch("http://119.29.239.184:8888/api/meidcList", {
    method: "post",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function registration(data: Record<string, any>) {
  const res = await fetch("http://119.29.239.184:8888/api/registration", {
    method: "post",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
