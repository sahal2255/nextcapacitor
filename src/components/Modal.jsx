import React, { useEffect, useState } from 'react';

const Modal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    import('../utils/storage').then(async ({ isFirstLogin }) => {
      const first = await isFirstLogin();
      if (first) setShow(true);
    });
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg flex flex-col items-center">
        <img
          src="./cake.jpg" 
          alt="Birthday Cake"
          className="w-32 rounded-full h-32 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Happy Birthday!</h2>
        <p className="text-gray-600 mb-6 text-center">
          Wishing you a day filled with happiness and a year filled with joy 🎉
        </p>
        <button
          onClick={() => setShow(false)}
          className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          Thank You!
        </button>
      </div>
    </div>
  );
};

export default Modal;
