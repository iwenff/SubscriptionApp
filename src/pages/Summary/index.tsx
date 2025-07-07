import { useNavigate } from 'react-router-dom';
import { Button } from '../../DS';
import './index.scss';
import { useForm } from '../../context/FormContext';
import { ADD_ONS } from '../AddOns';

const planPrices = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
};

const Summary = () => {
  const { billingPlan, selectedAddOns, selectedPlan } = useForm();
  const navigate = useNavigate();

  const basePrice = planPrices[selectedPlan][billingPlan];

  const addons = selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)).filter((a) => a !== undefined);

  const addonsTotal = addons.reduce((sum, addOn) => sum + (addOn ? addOn[billingPlan] : 0), 0);

  const total = basePrice + addonsTotal;

  return (
    <div className="main">
      <img src="Step4.svg" alt="" />
      <div className="content">
        <h1>Finishing up</h1>
        <p className="subtitle">Double-check everything looks OK before confirming.</p>

        <div className="summary-box">
          <div className="plan-line">
            <div>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} ({billingPlan})
            </div>
            <div className="price">
              ${basePrice}/{billingPlan === 'monthly' ? 'mo' : 'yr'}
            </div>
          </div>

          <hr />

          {addons.map((addOn) => (
            <div className="addon-line" key={addOn!.id}>
              <span>{addOn!.label}</span>
              <span>
                +${addOn![billingPlan]}/{billingPlan === 'monthly' ? 'mo' : 'yr'}
              </span>
            </div>
          ))}

          <hr />

          <div className="total">
            <span>Total (per {billingPlan === 'monthly' ? 'month' : 'year'})</span>
            <span className="total-price">
              ${total}/{billingPlan === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', marginLeft: '-350px' }}>
          <Button onClick={() => navigate('/addons')}>Go Back</Button>
          <Button style={{ marginLeft: '250px' }}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
