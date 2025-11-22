import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export function AnimateGradient({ className }: Props) {
  return (
    <div
      className={cn(
        `rounded-tr-ful h-8 w-screen animate-gradient bg-gradient-to-r from-primary via-[#E73C7E] to-[#23A6D5] bg-[length:400%_400%]`,
        className
      )}
    />
  );
}
