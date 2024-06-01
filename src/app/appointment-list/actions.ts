"use server";

export async function getRecordByPatient(patientId: string) {
  return (await fetch(`http://119.29.239.184:8888/api/getRecordByPatient?patientId=${patientId}`)).json();
}
