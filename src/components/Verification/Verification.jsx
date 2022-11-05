import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOnSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import { FormControlLabel, Slider, Switch } from '@mui/material';
import { COLORS } from '../../assets/theme';

function Verification() {
  const [driver, setDriver] = useState(false);
  const [verified, setVerified] = useState(false);
  const [address, setAddress] = useState(false);
  const navigation = useNavigate();

  const onClickBack = () => {
    navigation('/register');
  };

  return (
    <>
      { !address ? (
        <>
          { verified ? (
            <div className="px-6">
              <button
                onClick={() => setVerified(false)}
                className="grid justify-content-left"
                type="button"
              >
                <ChevronLeftIcon className="h-10 mt-8" />
              </button>
              <h1 className="text-4xl text-left font-bold mt-12">Upload photo</h1>
              <p className="text-left mt-4" style={{ color: '#6A707C' }}>Please upload a selfie so we can verify your identity</p>
              <div className="grid justify-items-start mt-10">
                <label
                  className="justify-self-center cursor-pointer outline-2 outline-gray rounded-full w-44 h-44 grid py-12"
                  style={{ backgroundColor: COLORS.gray }}
                >
                  <UserIcon className="h-12 justify-self-center" style={{ color: '#849293' }} />
                  <p className="justify-self-center" style={{ color: '#849293' }}>Upload photo</p>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <button
                onClick={() => setAddress(true)}
                type="button"
                className="w-full rounded-lg my-6 py-4 grid bottom-20 fixed w-[90%]"
                style={{ backgroundColor: COLORS.black, color: 'white' }}
              >Next
              </button>
            </div>
          ) : (
            <div className="px-6">
              <button onClick={onClickBack} className="grid justify-content-left" type="button"><ChevronLeftIcon className="h-10 mt-8" /></button>
              <h1 className="text-4xl text-left font-bold mt-12">Verify your identity</h1>
              <p className="text-left mt-4" style={{ color: '#6A707C' }}>Please upload photos of your ID to ensure best possible experience</p>
              <div className="grid justify-items-start mt-10">
                <h1 className="font-bold text-lg">ID Front</h1>
                <label className="cursor-pointer outline-2 outline-gray rounded-xl w-full grid py-12" style={{ backgroundColor: COLORS.gray }}>
                  <ArrowUpOnSquareIcon className="h-12 justify-self-center" style={{ color: '#849293' }} />
                  <p className="justify-self-center" style={{ color: '#849293' }}>Upload photo</p>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="grid justify-items-start mt-10">
                <h1 className="font-bold text-lg">ID Back</h1>
                <label className="cursor-pointer outline-2 outline-gray rounded-xl w-full grid py-12" style={{ backgroundColor: COLORS.gray }}>
                  <ArrowUpOnSquareIcon className="h-12 justify-self-center" style={{ color: '#849293' }} />
                  <p className="justify-self-center" style={{ color: '#849293' }}>Upload photo</p>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <button onClick={() => setVerified(true)} type="button" className="w-full rounded-lg my-6 py-4 grid justify-self-center" style={{ backgroundColor: COLORS.black, color: 'white' }}>Next</button>
            </div>
          )}
        </>
      ) : (
        <div className="px-6">
          <button
            onClick={() => setAddress(false)}
            className="grid justify-content-left"
            type="button"
          >
            <ChevronLeftIcon className="h-10 mt-8" />
          </button>
          <h1 className="text-4xl text-left font-bold mt-12">Just a bit more information</h1>
          <div className="grid justify-items-start mt-10">
            <form>
              <input
                type="text"
                placeholder="Phone number"
                className="outline-1 p-4 my-2 rounded-xl text-lg w-full"
                style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
              />
              <input
                type="text"
                placeholder="Home address"
                className="outline-1 p-4 my-2 rounded-xl text-lg w-full"
                style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
              />
              <p className="text-md mt-4" style={{ color: '#849293' }}>Home radius</p>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                marks={[{ value: 100, label: '4 km' }]}
                sx={{ color: 'common.black' }}
              />
              <input
                type="text"
                placeholder="Work address"
                className="outline-1 p-4 my-2 rounded-xl text-lg w-full"
                style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
              />
              <p className="text-md mt-4" style={{ color: '#849293' }}>Work radius</p>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                marks={[{ value: 100, label: '4 km' }]}
                sx={{ color: 'common.black' }}
              />
              <FormControlLabel control={<Switch onChange={(event) => setDriver(event.target.checked)} color="success" />} className="mx-12" label="Would you like to be a driver?" />
              { driver && (
                <input
                  type="number"
                  placeholder="Registration plate"
                  className="outline-1 p-4 my-2 rounded-xl text-lg w-full"
                  style={{ backgroundColor: COLORS.gray, outlineColor: '#E8E8E8' }}
                />
              )}
            </form>
          </div>
          <button
            onClick={() => navigation('/home')}
            type="button"
            className="w-full rounded-lg my-4 py-4 grid"
            style={{ backgroundColor: COLORS.black, color: 'white' }}
          >Finish
          </button>
        </div>
      )}
    </>
  );
}

export default Verification;
