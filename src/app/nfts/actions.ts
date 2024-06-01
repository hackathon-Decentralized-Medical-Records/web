"use server";

export async function getCaseByPatientId(patientId: string) {
  return (await fetch(`http://119.29.239.184:8888/api/case/getCaseByPatientId?patientId=${patientId}`)).json();
}
