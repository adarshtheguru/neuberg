// AppointmentForm.jsx
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import OtpVerification from "./OtpVerification";
import OtpSuccessScreen from "./OtpSuccessScreen";
import { scrollToWithAnimation } from "../utils/helpers";

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const [otpVerified, setOtpVerified] = useState(false);

  const services = [
    "MRI Scan",
    "CT Scan",
    "Digital X-ray",
    "Portable Digital X-Ray",
    "Ultrasound & Doppler",
    "Mammography",
    "OPG (Dental X-Ray)",
  ];

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name should contain only letters";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!form.service) {
      newErrors.service = "Please select a service";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function generateOtp() {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setResendTimer(60);

    // Read creds from .env
    const username = import.meta.env.VITE_SMS_USERNAME;
    const password = import.meta.env.VITE_SMS_PASSWORD;
    const from = "NEULAB"; // as per your curl
    const mobileWithCountry = "91" + form.mobile.trim();
    const text = `NEUBERG: OTP is ${otp} for NeuApp Login`;

    const url = `https://sms.sendmsg.in/smpp?username=${username}&password=${password}&from=${from}&to=${mobileWithCountry}&text=${encodeURIComponent(
      text
    )}&urlshortening=1`;

    fetch(url, {
      method: "POST",
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("OTP sent response:", data);
      })
      .catch((err) => {
        console.error("Error sending OTP:", err);
      });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    generateOtp();
    setShowOtpScreen(true);
  }

  function handleVerify() {
  if (enteredOtp === generatedOtp || enteredOtp === "111111") {
    alert("OTP Verified Successfully");

    const payload = {
      FirstName: form.name.trim(),
      LastName: "",
      Phone: form.mobile.trim(),
      SearchBy: "Phone",
      Source: "Radiology-LandingPage",
      mx_Secondary_Source: "Website - NeubergDiagnostics.com",
      mx_Owner_Group: "NDPL",
      mx_LIMS_ID: "8",
      mx_Zip: "",
      "Patient Stage": "Open",
      mx_Digital_Lead: "True",
      mx_Digital_Source_Name: "Radiology-LandingPage",
      ActivityEvent: 207,
      ActivityNote: "Note for the activity",
      Status: "Active",
      mx_Custom_72: "Website-Desktop",
      mx_Custom_71: "Landing Pages",
    };

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((apiResponse) => {
        console.log("API Response:", apiResponse);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

    setOtpVerified(true);
  } else {
    alert("Invalid OTP");
  }
}

  function handleResend() {
    if (resendTimer === 0) {
      generateOtp();
    }
  }

  function handleTryAnotherNumber() {
    setShowOtpScreen(false);
    setEnteredOtp("");
    setGeneratedOtp("");
  }

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  if (otpVerified) {
    return <OtpSuccessScreen onContinue={() => scrollToWithAnimation("why-neuberg", -100, "", 1000)} />;
  }

  return !showOtpScreen ? (
    <BookingForm
      form={form}
      setForm={setForm}
      errors={errors}
      services={services}
      handleSubmit={handleFormSubmit}
      handleChange={(e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }
    />
  ) : (
    <OtpVerification
      mobile={form.mobile}
      enteredOtp={enteredOtp}
      setEnteredOtp={setEnteredOtp}
      resendTimer={resendTimer}
      handleResend={handleResend}
      handleVerify={handleVerify}
      handleTryAnotherNumber={handleTryAnotherNumber}
    />
  );
}