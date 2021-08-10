import React from "react";
import { useAppSelector } from "../../state/hooks";
import EventCard from "./EventCard";

const Events: React.FC = () => {
  const featureState = useAppSelector((state) => state.featureState.features);

  return (
    <div className="flex-grow-1 primary-color text-light row gy-0 gx-0 justify-content-center">
      {featureState.map((feature) => (
        <EventCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Events;
