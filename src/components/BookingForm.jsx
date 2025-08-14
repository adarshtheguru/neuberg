import React from "react";

export default function BookingForm({
  form,
  setForm,
  errors,
  services,
  handleSubmit,
  handleChange,
}) {
  return (
    <form
      id="formBox"
      onSubmit={handleSubmit}
      className="formBox w-full xl:max-w-[600px] bg-white rounded-[12px] shadow-md pt-3 py-8 md:pl-[40px] md:pr-[60px] px-[10px] text-[#1C1C1C] text-[14px] relative"
    >
      <div className="PriceBox md:pl-[40px] md:pr-[60px] px-[10px] mavenPro text-white">
        <div className="l1">Radiology Scan Starting From</div>
        <div className="l2">Rs. 499/- Only</div>
      </div>
      <h3 className="text-xl font-semibold mb-4 md:text-[32px] text-[22px] xl:text-left text-center">
        Book An Appointment Now
      </h3>

      <div className="flex flex-col gap-6 pt-[100px]">
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
            style={{
              backgroundColor: "#fff",
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
            }}
            className={`w-full border appearance-none ${
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

        <button
          type="submit"
          className="mt-4 w-fit rounded-[100px] py-2 px-4 text-white font-medium cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, #F7941D -18.22%, #5C2D91 100%)",
          }}
        >
          Get a Call Back
        </button>
      </div>
    </form>
  );
}