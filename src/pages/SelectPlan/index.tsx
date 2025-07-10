import { useNavigate } from 'react-router-dom';
import { Button } from '../../DS';
import './index.scss';
import { useForm } from '../../context/FormContext';

const SelectPlan = () => {
  const { billingPlan, setBillingPlan, selectedPlan, setSelectedPlan } = useForm();
  const navigate = useNavigate();
  const redirectIF = () => {
    if (selectedPlan === null) {
      alert('choose the plan');
      return;
    } else {
      navigate('/addons');
    }
  };

  return (
    <div className="main">
      <img src="Step2.svg" alt="" />
      <div className="content">
        <h1>Select your plan</h1>
        <p style={{ color: '#9699AA' }}>You have the option of monthly or yearly billing.</p>
        <div className="planCon">
          <div
            className={`planBtn ${selectedPlan === 'arcade' ? 'selected' : ''}`}
            onClick={() => setSelectedPlan('arcade')}
          >
            <img src="Arcade.svg" alt="" />
            <h4>Arcade</h4>
            <p>{billingPlan === 'monthly' ? '$9/mo' : '$90/mo'}</p>
          </div>
          <div
            className={`planBtn ${selectedPlan === 'advanced' ? 'selected' : ''}`}
            onClick={() => setSelectedPlan('advanced')}
          >
            <img src="Advanced.svg" alt="" />
            <h4>Advanced</h4>
            <p>{billingPlan === 'monthly' ? '$12/mo' : '$120/mo'}</p>
          </div>
          <div className={`planBtn ${selectedPlan === 'pro' ? 'selected' : ''}`} onClick={() => setSelectedPlan('pro')}>
            <img src="Pro.svg" alt="" />
            <h4>Pro</h4>
            <p>{billingPlan === 'monthly' ? '$15/mo' : '$150/mo'}</p>
          </div>
        </div>
        <div className="billing-toggle">
          <span className={billingPlan === 'monthly' ? 'active' : ''}>Monthly</span>
          <div
            className="toggle"
            onClick={() => setBillingPlan(billingPlan === 'monthly' ? 'yearly' : 'monthly')}
            role="switch"
            aria-checked={billingPlan === 'yearly'}
          >
            <div className={`circle ${billingPlan === 'yearly' ? 'right' : ''}`} />
          </div>
          <span className={billingPlan === 'yearly' ? 'active' : ''}>Yearly</span>
        </div>
        <div style={{ display: 'flex', marginLeft: '-350px' }}>
          <Button onClick={() => navigate('/')}>Go Back</Button>
          <Button onClick={redirectIF} style={{ marginLeft: '250px' }}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
