import React, { useState } from "react";

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const services = ["MRI Scan", "CT Scan", "Full Body Checkup", "X-Ray"];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name should contain only letters";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10,}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Enter a valid mobile number";
    }

    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    if (!form.date) {
      newErrors.date = "Please select a date";
    }

    if (!form.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    console.log("submit payload", form);
    alert("Appointment requested — check console for payload");

    setForm({ name: "", mobile: "", service: "", date: "", time: "" });
    setErrors({});
  }

  return (
    <form
      id="formBox"
      onSubmit={handleSubmit}
      className="w-full xl:max-w-[600px] bg-white rounded-[12px] shadow-md py-8 md:pl-[40px] md:pr-[60px] px-[10px] text-[#1C1C1C] text-[14px]"
    >
      <h3 className="text-xl font-semibold mb-4 md:text-[32px] text-[22px]">Book An Appointment Now</h3>

      <div className="flex flex-col gap-6">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Type name here"
            className={`w-full border ${
              errors.name ? "border-red-500" : "border-gray-200"
            } rounded-md px-3 py-2`}
          />
          {errors.name && (
            <span className="absolute text-red-500 text-xs left-0 -bottom-4">
              {errors.name}
            </span>
          )}
        </div>

        {/* Mobile */}
        <div className="relative">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91"
            className={`w-full border ${
              errors.mobile ? "border-red-500" : "border-gray-200"
            } rounded-md px-3 py-2`}
          />
          {errors.mobile && (
            <span className="absolute text-red-500 text-xs left-0 -bottom-4">
              {errors.mobile}
            </span>
          )}
        </div>

        {/* Service */}
        <div className="relative">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full border ${
              errors.service ? "border-red-500" : "border-gray-200"
            } rounded-md px-3 py-2 bg-white`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="absolute text-red-500 text-xs left-0 -bottom-4">
              {errors.service}
            </span>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 relative">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`w-full border ${
                errors.date ? "border-red-500" : "border-gray-200"
              } rounded-md px-3 py-2`}
            />
            {errors.date && (
              <span className="absolute text-red-500 text-xs left-0 -bottom-4">
                {errors.date}
              </span>
            )}
          </div>

          <div className="col-span-2 relative">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={`w-full border ${
                errors.time ? "border-red-500" : "border-gray-200"
              } rounded-md px-3 py-2`}
            />
            {errors.time && (
              <span className="absolute text-red-500 text-xs left-0 -bottom-4">
                {errors.time}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-fit rounded-[100px] py-2 px-4 text-white font-medium"
          style={{
            background:
              "linear-gradient(90deg, #F7941D -18.22%, #5C2D91 100%)",
          }}
        >
          Book An Appointment
        </button>
      </div>
    </form>
  );
}