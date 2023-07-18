interface Props {
  isSignin: boolean;
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  }
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthModalInputs = ({isSignin, inputs, handleChangeInput}: Props) => {
  return (
    <div>
      {isSignin ? null :
        (
          <div className="flex justify-between my-3 text-sm">
            <input
              name="firstName"
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="First Name"
              value={inputs.firstName}
              onChange={handleChangeInput}
            />
            <input
              name="lastName"
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Last Name"
              value={inputs.lastName}
              onChange={handleChangeInput}
            />
          </div>
        )
      }
      <div className="flex justify-between my-3 text-sm">
        <input
          name="email"
          type="text"
          className="w-full p-2 py-3 border rounded"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>
      {isSignin ? null :
        (
          <div className="flex justify-between my-3 text-sm">
            <input
              name="phone"
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Phone"
              value={inputs.phone}
              onChange={handleChangeInput}
            />
            <input
              name="city"
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="City"
              value={inputs.city}
              onChange={handleChangeInput}
            />
          </div>
        )
      }
      <div className="flex justify-between my-3 text-sm">
        <input
          name="password"
          type="password"
          className="w-full p-2 py-3 border rounded"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  )
}

export default AuthModalInputs