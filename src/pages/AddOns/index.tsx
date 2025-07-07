import { Button } from '../../DS';
import './index.scss';
import { useForm } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';

interface AddOnsType {
  id: string;
  label: string;
  description: string;
  monthly: number;
  yearly: number;
}

export const ADD_ONS: AddOnsType[] = [
  {
    id: 'online',
    label: 'Online service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 'storage',
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 'profile',
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20,
  },
];

const AddOns = () => {
  const { selectedAddOns, setSelectedAddOns, billingPlan } = useForm();
  const navigate = useNavigate();

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  return (
    <div className="main">
      <img src="Step3.svg" alt="" />
      <div className="content">
        <h1>Pick add-ons</h1>
        <p style={{ color: '#9699AA' }}>Add-ons help enhance your gaming experience.</p>
        {ADD_ONS.map((addOn) => {
          const isSelected = selectedAddOns.includes(addOn.id);

          return (
            <div
              key={addOn.id}
              className={`addon-box ${isSelected ? 'active' : ''}`}
              onClick={() => toggleAddOn(addOn.id)}
            >
              <input type="checkbox" checked={isSelected} onChange={() => toggleAddOn(addOn.id)} />
              <div className="addon-content">
                <strong>{addOn.label}</strong>
                <p>{addOn.description}</p>
              </div>
              <span>
                +${billingPlan === 'monthly' ? addOn.monthly : addOn.yearly}/{billingPlan === 'monthly' ? 'mo' : 'yr'}
              </span>
            </div>
          );
        })}
        <div style={{ display: 'flex', marginLeft: '-350px' }}>
          <Button onClick={() => navigate('/selectplan')}>Go Back</Button>
          <Button onClick={() => navigate('/summary')} style={{ marginLeft: '250px' }}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
