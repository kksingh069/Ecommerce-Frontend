import React from 'react'
// import toppart from "@/assets/group-doodle.svg";
// import botpart from "@/assets/doodles-1.svg";
import topsw  from "@/assets/top-swoosh.svg";
import Footer from '@/components/shopping-view/footer';

function Contact() {
  return (
    <div>
    <style jsx>{`
      .contact-form-part {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        padding: 2rem;
        min-height: 100vh;
      }

      .contact-heading {
        text-align: center;
        margin-bottom: 2rem;
      }

      .contact-heading h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
        position: relative;
        display: inline-block;
      }

      .contact-heading h1::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(to right, #4f46e5, #6366f1);
        border-radius: 2px;
      }

      .input-label {
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #333;
      }

      .form-row {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .form-group {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .form-input:focus {
        outline: none;
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
      }

      .form-textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        min-height: 150px;
        resize: vertical;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .form-textarea:focus {
        outline: none;
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
      }

      .submit-btn {
        width: 100%;
        padding: 0.75rem;
        background-color: #4f46e5;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
      }

      .submit-btn:hover {
        background-color: #4338ca;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(79, 70, 229, 0.3);
      }

      .all-contact-box {
        background-color: white;
        padding: 2.5rem;
        border-radius: 16px;
        box-shadow: 
          0 10px 25px rgba(0, 0, 0, 0.1),
          0 6px 10px rgba(0, 0, 0, 0.05);
        width: 100%;
        max-width: 700px;
        transition: transform 0.3s ease;
      }

      .all-contact-box:hover {
        transform: translateY(-5px);
      }
    `}</style>

    <section 
      className='contact-form-part'
      style={{
        backgroundImage: `url(${topsw})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className='all-contact-box'>
        <div className='contact-heading'>
          <h1>Contact Us</h1>
        </div>
        <div className='contact-box'>
          <form>
            <div className='form-row'>
              <div className='form-group'>
                <label className='input-label'>First Name</label>
                <input 
                  type="text" 
                  className='form-input' 
                  placeholder='Enter your first name'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='input-label'>Last Name</label>
                <input 
                  type="text" 
                  className='form-input' 
                  placeholder='Enter your last name'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label className='input-label'>Email Address</label>
              <input 
                type="email" 
                className='form-input' 
                placeholder='Enter your email address'
                required
              />
            </div>
            <div className='form-group'>
              <label className='input-label'>Message</label>
              <textarea 
                className='form-textarea' 
                placeholder='Enter your message'
                required
              ></textarea>
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default Contact