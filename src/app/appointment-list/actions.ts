"use server";

export async function getRecordByPatient(patientId: string) {
  return (await fetch(`http://119.29.239.184:8888/api/getRecordByPatient?patientId=${patientId}`)).json();
}

export async function getRecordByMedic(medicId: string) {
  return (await fetch(`http://119.29.239.184:8888/api/getRecordByMedic?medicId=${medicId}`)).json();
}

export async function updateRecordStatus(data: Record<string, any>) {
  return (
    await fetch(`http://119.29.239.184:8888/api/updateRecordStatus`, {
      method: "post",
      body: JSON.stringify(data),
    })
  ).json();
}
