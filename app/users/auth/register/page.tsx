"use client";

import React from 'react';
import { Directions } from "@/app/components/users/register/Directions";
import { EmailVerification } from "@/app/components/users/register/EmailVerification";
import { PersonnalInformation } from "@/app/components/users/register/PersonalInformation";
import { Services } from "@/app/components/users/register/Services";
import { useStepStore } from "@/store/useStepStore";
import { Layout } from './Layout';

const Register = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  return (
      <Layout>
          {currentStep === 1 && <PersonnalInformation />}
          {currentStep === 2 && <Directions />}
          {currentStep === 3 && <Services />}
          {currentStep === 4 && <EmailVerification />}
      </Layout>
  );
};

export default Register;