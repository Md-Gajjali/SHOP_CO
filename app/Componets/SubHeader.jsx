import { twMerge } from "tailwind-merge"

const SubHeader = ({ title, className }) => {
  return (
    <div className={twMerge("flex w-full justify-center items-center", className)}>
      <h1 className="mx-auto font-bold text-5xl uppercase">{title}</h1>
    </div>
  );
};
export default SubHeader
