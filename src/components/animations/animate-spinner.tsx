export function AnimateSpinner() {
  return (
    <div className='relative h-[100px] w-[100px] animate-[spin_1.7s_linear_infinite,hue_1s_ease-in-out_infinite] rounded-full bg-[linear-gradient(rgb(186,66,255)_35%,rgb(0,225,255))] shadow-[0_-5px_20px_rgba(186,66,255,1),0_5px_20px_rgba(0,225,255,1)] blur-[1px]'>
      <div className='absolute inset-0 rounded-full bg-[#242424] blur-[10px]' />
    </div>
  );
}
