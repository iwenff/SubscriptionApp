import { createContext, useContext, useEffect, useState } from 'react';

type BillingPlan = 'monthly' | 'yearly';
type Plan = 'arcade' | 'advanced' | 'pro';

interface FormContextType {
  billingPlan: BillingPlan;
  setBillingPlan: (plan: BillingPlan) => void;
  selectedPlan: Plan;
  setSelectedPlan: (plan: Plan) => void;
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  num: string;
  setNum: (num: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const getInitialFormData = () => {
  const saved = sessionStorage.getItem('formData');
  if (!saved) return null;

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const saved = getInitialFormData();

  const [billingPlan, setBillingPlan] = useState<BillingPlan>(saved?.billingPlan || 'monthly');
  const [selectedPlan, setSelectedPlan] = useState<Plan>(saved?.selectedPlan || 'arcade');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(saved?.selectedAddOns || []);
  const [name, setName] = useState<string>(saved?.name || '');
  const [email, setEmail] = useState<string>(saved?.email || '');
  const [num, setNum] = useState<string>(saved?.num || '');

  useEffect(() => {
    const formData = {
      billingPlan,
      selectedPlan,
      selectedAddOns,
      name,
      email,
      num,
    };

    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [billingPlan, selectedPlan, selectedAddOns, name, email, num]);

  return (
    <FormContext.Provider
      value={{
        billingPlan,
        setBillingPlan,
        selectedPlan,
        setSelectedPlan,
        selectedAddOns,
        setSelectedAddOns,
        name,
        setName,
        email,
        setEmail,
        num,
        setNum,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm должна быть использована вместе с FormProvider');
  }
  return context;
};
