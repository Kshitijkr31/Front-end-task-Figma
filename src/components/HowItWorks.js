import React from 'react';
import PillarCard from './PillarCard';
import './HowItWorks.css';

// Import images
import nutritionImage from './Screenshot 2024-08-18 211428.png';
import physicalActivityImage from './Screenshot 2024-08-18 211421.png';
import restorativeSleepImage from './Screenshot 2024-08-18 211414.png';

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h2>How it works</h2>
      <h3>Lifestyle as medicine:</h3>
      <h7 >The six pillars</h7>
      <div className="pillars">
        <PillarCard 
          title="Nutrition" 
          description="Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
          image={nutritionImage}
        />
        <PillarCard 
          title="Physical Activity" 
          description="Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
          image={physicalActivityImage}
        />
        <PillarCard 
          title="Restorative Sleep" 
          description="Consistent, quality sleep is essential for cognitive function and physical health."
          image={restorativeSleepImage}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
