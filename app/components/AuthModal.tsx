"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}: {isSignin: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: ""
  });

  return (
    <div>
      <button
        className={isSignin ? "p-1 px-4 mr-3 text-white bg-blue-400 border rounded" : "p-1 px-4 border rounded"}
        onClick={handleOpen}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[600px]">
            <div className="pb-2 mb-2 font-bold text-center uppercase border-b">
              <p className="text-sm">{isSignin ? "Sign In" : "Create Account"}</p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {isSignin ? "Log Into Your Account" : "Create Your OpenTable Account"}
              </h2>
              <AuthModalInputs isSignin={isSignin} inputs={inputs} handleChangeInput={handleChangeInput} />
              <button
                className="w-full p-3 mb-5 text-sm text-white uppercase bg-red-600 rounded disabled:bg-gray-400"
              >
                {isSignin ? "Sign In" : "Create Account"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}