import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'> {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 24, ...props }) => {
  // Resolve icon component dynamically from lucide-react
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  
  if (!IconComponent) {
    // Fallback icon in case of missing matches
    return <Icons.HelpCircle className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
};
export default LucideIcon;
