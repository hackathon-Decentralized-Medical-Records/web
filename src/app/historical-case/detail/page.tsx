import { marked } from "marked";
import "./styles.css";

const md = `
# Electronic Medical Record (EMR)

## Patient Information
- **Name**: John Doe
- **Gender**: Male
- **Age**: 28
- **Contact Information**: 123-4567-8901
- **Address**: 123 Main Street, Chaoyang District, Beijing

## Visit Information
- **Date of Visit**: June 2, 2024
- **Department**: Internal Medicine
- **Attending Physician**: Dr. Li

## Chief Complaint
- **Symptoms**: The patient complains of coughing, runny nose, sore throat, and mild fever, lasting for 3 days.

## History of Present Illness
- **Onset Date**: May 30, 2024
- **Symptom Description**:
  - Cough (intermittent)
  - Runny nose (clear discharge)
  - Sore throat (mild)
  - Fever (highest temperature 38.2°C)
- **Self-treatment**: Took over-the-counter cold medication (Tylenol), with little effect.

## Past Medical History
- **Previous Illnesses**: No significant medical history
- **Allergies**: No known drug allergies

## Physical Examination
- **Temperature**: 37.8°C
- **Pulse**: 80 beats per minute
- **Respiration**: 18 breaths per minute
- **Blood Pressure**: 120/80 mmHg
- **Throat**: Pharyngeal congestion
- **Lungs**: Clear breath sounds, no obvious rales

## Auxiliary Examinations
- **Complete Blood Count (CBC)**: Normal white blood cell count, mild lymphocytosis
- **C-reactive Protein (CRP)**: Normal

## Diagnosis
- **Preliminary Diagnosis**: Common Cold (Upper Respiratory Tract Infection)

## Treatment Plan
- **Medication**:
  - Acetaminophen (Tylenol): 500mg per dose, every 6 hours, discontinue after symptom relief.
  - Pseudoephedrine (Sudafed): 30mg per dose, every 8 hours, discontinue after symptom relief.
  - Throat lozenges: Use as needed, every 2-3 hours.
- **Other Recommendations**:
  - Drink plenty of warm water to keep the throat moist
  - Get adequate rest and avoid overexertion
  - Ensure good ventilation indoors and avoid catching a cold

## Follow-up Plan
- **Next Appointment**: Follow-up in one week. If symptoms worsen or new symptoms appear, seek medical attention immediately.

## Notes
- **Remarks**: The patient should monitor their symptoms and contact the physician if any concerns arise.

---

**Physician's Signature**: Dr. Li
**Date**: June 2, 2024`;

export default function Detail() {
  return (
    <div className="container">
      <div
        dangerouslySetInnerHTML={{
          __html: marked.parse(md),
        }}
      ></div>
    </div>
  );
}
