
// Fix: Import React to resolve 'React' namespace for ReactNode type
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
  features: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}
