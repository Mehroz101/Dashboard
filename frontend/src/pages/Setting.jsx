import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";

const Setting = () => {
  // Default values for the user settings form
  const {
    control: controlUser,
    handleSubmit: handleUserSubmit,
    formState: { errors: userErrors },
  } = useForm({
    defaultValues: {
      name: "John",
      email: "john.doe@example.com",
    },
  });

  // Default values for the password reset form
  const {
    control: controlPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm();

  const onUserSubmit = (data) => {
    console.log("User  Data:", data);
  };

  const onPasswordSubmit = (data) => {
    console.log("Password Data:", data);
  };

  const onUpload = () => {
    console.log("File Uploaded");
  };

  const deletePicture = () => {
    console.log("Picture Deleted");
  };

  return (
    <>
      <div className="setting_page mt-4 flex justify-content-center p-4">
        <div className="settings">
          <div className="profile flex align-items-center justify-content-center gap-6 ">
            <div className="profile_pic overflow-hidden border-round-lg">
              <img
                src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                alt="image"
              />
            </div>
            <div className="profile_btn flex flex-column gap-5">
              <label
                htmlFor="file"
                className="cursor-pointer text-lg font-semibold bg-cyan-500 text-white p-2 flex align-items-center justify-content-center border-round-lg gap-2"
              >
                <i className="pi pi-cloud-upload"></i>
                <strong>Choose a file</strong>
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={onUpload}
                accept="image/*"
              />
              <button
                onClick={deletePicture}
                className="cursor-pointer text-lg font-semibold bg-red-400 text-white p-2 flex align-items-center justify-content-center border-round-lg border-none gap-2"
              >
                Delete Picture
              </button>
            </div>
          </div>

          {/* User Settings Form */}
          <div className="form mt-4 bg-white shadow-3 p-4">
            <form onSubmit={handleUserSubmit(onUserSubmit)}>
              <CustomInput
                label="Full Name"
                name="name"
                control={controlUser}
                placeholder="Enter your full name"
                required={true}
              />

              <CustomInput
                label="Email"
                name="email"
                control={controlUser}
                type="email"
                placeholder="Enter your email"
                required={true}
              />
              <button
                type="submit"
                className="mt-5 w-full bg-cyan-500 text-white p-3 flex align-items-center justify-content-center border-round-100 border-none gap-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Password Reset Form */}
          <div className="form mt-4 shadow-3 bg-white p-4">
            <h2 className="text-lg font-semibold">Reset Password</h2>
            <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
              <CustomInput
                label="Old Password"
                name="oldPassword"
                control={controlPassword}
                type="password"
                placeholder="Enter your old password"
                required={true}
              />

              <CustomInput
                label="New Password"
                name="newPassword"
                control={controlPassword}
                type="password"
                placeholder="Enter your new password"
                required={true}
              />
              <button
                type="submit"
                className="mt-5 w-full bg-cyan-500 text-white p-3 flex align-items-center justify-content-center border-round-100 border-none gap-2"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;