import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
    email: '',
  });

  const [messageSent, setMessageSent] = useState(false); // New state for message sent prompt

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_contact',
      'template_0e439re',
      toSend,
      'WHpMEsyMhD6U7FqeI'
    )
      .then((response) => {
        console.log('success!', response.status, response.text);
        setToSend({
          name: '',
          phone: '',
          subject: '',
          message: '',
          email: '',
        });
        setMessageSent(true); // Show the message sent prompt
        setTimeout(() => setMessageSent(false), 3000); // Hide the prompt after 3 seconds
      })
      .catch((err) => {
        console.log('failed...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-1'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      
      {messageSent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white text-center p-4 rounded-md">
            Message Sent Successfully!
          </div>
        </div>
      )}
      
      <form onSubmit={onSubmit}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2' />
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='name'
            value={toSend.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Phone</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='phone'
            value={toSend.phone}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
            value={toSend.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
            value={toSend.subject}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 flex border-gray-300'
            rows='10'
            name='message'
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
