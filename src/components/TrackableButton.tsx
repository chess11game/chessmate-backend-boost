import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

interface TrackableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  trackingEffect?: 'ripple' | 'glow' | 'pulse';
  asChild?: boolean;
}

export const TrackableButton: React.FC<TrackableButtonProps> = ({
  children,
  className,
  variant,
  size,
  trackingEffect = 'ripple',
  asChild,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingEffect === 'ripple' && buttonRef.current) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
    
    props.onClick?.(e);
  };

  return (
    <Button
      ref={buttonRef}
      className={cn(
        'trackable-button relative overflow-hidden',
        trackingEffect === 'glow' && 'hover:shadow-lg hover:shadow-primary/25',
        trackingEffect === 'pulse' && 'hover:animate-[trackable-pulse_1s_ease-in-out_infinite]',
        className
      )}
      variant={variant}
      size={size}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};