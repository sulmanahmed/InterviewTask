const JobData = [
  {
    id: 1,
    careerLevel: '',
    description: '',
    education: '',
    equipmentSpecification: '',
    expectedStartDate: '',
    experience: '',
    gender: '',
    hourlyRate: '',
    image: '',
    lookingFor: '',
    skills: '',
    sundayStTime: '',
    mondayStTime: '',
    sundayEnTime: '',
    mondayEnTime: '',
    tuesStTime: '',
    tuesEnTime: '',
    wedStTime: '',
    wedEnTime: '',
    thusStTime: '',
    thusEnTime: '',
    friEnTime: '',
    friStTime: '',
    saturStTime: '',
    saturEnTime: '',
  },
]

const careerLevel = [
  {
    value: 'Entry',
    display: 'Entry',
  },
  {
    value: 'Intermediate',
    display: 'Intermediate',
  },
  {
    value: 'Senior',
    display: 'Senior',
  },
]
const gender = [
  {
    value: 'Male',
    display: 'Male',
  },
  {
    value: 'Female',
    display: 'Female',
  },
  {
    value: 'Other',
    display: 'Other',
  },
]
// Job Data
module.exports = {
  JobData: JobData,
  careerLevel: careerLevel,
  gender: gender,
}
