import React from "react"

const RegistrationForm = props => {
  if (process.env.NODE_ENV !== "development") {
    return null
  }
  return (
    <>
      <h1>ลงทะเบียน</h1>
      <form style={{ display: "flex" }}>
        <div>
          <label>
            email <input type="text" />
          </label>
        </div>
        <div>
          <label>
            ชื่อ
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            รหัส
            <input type="text" />
          </label>
        </div>
      </form>
    </>
  )
}
export default RegistrationForm
