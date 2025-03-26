type Props = {
  icon: string;
};

export const HardIcons = ({ icon }: Props) => {
  return (
    <div
      className="w-12 h-12 sm:w-18 sm:h-18  bg-cover bg-center hover:scale-110 "
      style={{
        backgroundImage: `url('${icon}')`,
      }}
    ></div>
  );
};
