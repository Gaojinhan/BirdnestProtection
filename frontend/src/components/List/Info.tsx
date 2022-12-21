import { violationsInfo } from "../../types"

const Info = (violation: violationsInfo) => {
  return (
    <div className="task">
      <h3>{violation.firstName} {violation.lastName}</h3>
      <p>{violation.email}</p>
      <p>{violation.phoneNumber}</p>
      <p>{violation.createdDt}</p>
    </div>
  )
}

export default Info
