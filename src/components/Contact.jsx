'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.time.trim()) newErrors.time = 'Preferred time is required';
        if (!formData.agree) newErrors.agree = 'Consent is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
        return;
        }
        console.log('Form submitted:', formData);

        toast.success('Message sent successfully. We will contact you shortly.');

        // Clear the form
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            time: '',
            agree: false,
        });

        // Clear any existing errors
        setErrors({});
    };

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
        ...prev,
        [name]: updatedValue,
    }));

    // Remove error if field is valid after change
    setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        switch (name) {
        case 'name':
            if (updatedValue.trim()) delete newErrors.name;
            break;
        case 'phone':
            if (updatedValue.trim()) delete newErrors.phone;
            break;
        case 'email':
            if (updatedValue.includes('@')) delete newErrors.email;
            break;
        case 'message':
            if (updatedValue.trim()) delete newErrors.message;
            break;
        case 'time':
            if (updatedValue.trim()) delete newErrors.time;
            break;
        case 'agree':
            if (updatedValue) delete newErrors.agree;
            break;
        default:
            break;
        }
        return newErrors;
    });
    };


    return (
        <section className="bg-[#FEFEFE] px-6 md:px-16 py-16" id="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="max-w-2xl border border-[#41413F] rounded-lg p-8 flex flex-col gap-6 mx-auto">
                <h2 className="text-3xl font-serif text-teal-800 text-center">Get In Touch</h2>
                <p className="text-center text-teal-800 text-sm">
                    Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, typically within one business day. This form is safe, private and completely free.
                </p>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-teal-800">Name</label>
                        <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-[#41413F] rounded px-4 py-2 focus:outline-none"
                        placeholder="Type your name"
                        />
                        {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                        <label className="text-teal-800">Phone</label>
                        <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-[#41413F] rounded px-4 py-2 focus:outline-none"
                        placeholder="(555) 123-4567"
                        />
                        {errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-teal-800">Email</label>
                        <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-[#41413F] rounded px-4 py-2 focus:outline-none"
                        placeholder="you@example.com"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                        <label className="text-teal-800">What brings you here?</label>
                        <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-[#41413F] rounded px-4 py-2 resize-none focus:outline-none"
                        placeholder="How can I help you?"
                        />
                        {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
                    </div>

                    {/* Preferred time */}
                    <div className="flex flex-col gap-1">
                        <label className="text-teal-800">Preferred time to reach you</label>
                        <input
                        name="time"
                        type="text"
                        value={formData.time}
                        onChange={handleChange}
                        className="border border-[#41413F] rounded px-4 py-2 focus:outline-none"
                        placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                        />
                        <p className="text-sm text-gray-600">Let us know when you're typically available for a call or consultation.</p>
                        {errors.time && <span className="text-red-600 text-sm">{errors.time}</span>}
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2">
                        <input
                        name="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="accent-teal-800 mt-1"
                        />
                        <label className="text-sm text-gray-600 leading-tight">
                        I agree to be contacted.
                        </label>
                    </div>
                    {errors.agree && <span className="text-red-600 text-sm">{errors.agree}</span>}

                    {/* Submit btn */}
                    <button type="submit"
                        disabled={!formData.agree}
                        className={`${
                        !formData.agree ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'
                        } bg-teal-800 transition-all duration-400 ease-in-out text-white rounded px-4 py-2 font-semibold tracking-wide`} >
                        Submit
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
