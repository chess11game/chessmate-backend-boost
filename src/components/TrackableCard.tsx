import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrackableCardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  style?: React.CSSProperties;
}

export const TrackableCard: React.FC<TrackableCardProps> = ({
  children,
  className,
  glowEffect = false,
  style
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
    
    // Set CSS custom properties for cursor tracking
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        'tracking-card cursor-tracker transition-all duration-300',
        glowEffect && isHovered && 'animate-[tracking-glow_2s_ease-in-out_infinite]',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        ...style,
      } as React.CSSProperties}
    >
      {children}
    </Card>
  );
};