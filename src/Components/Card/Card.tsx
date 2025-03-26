import { dataCardType } from "@/Types/dataCardType";

type Props = {
  data: dataCardType;
};

export const Card = ({ data }: Props) => {
  return (
    <div className=" bg-gradient-to-b from-sky-800 to-indigo-700 p-1 rounded-md hover:scale-110 transition duration-300 ease-in-out border border-black shadow-lg shadow-white/20">
      <div className="w-52 h-64  flex flex-col justify-between items-center p-4 rounded-md bg-indigo-900 border border-black opacity-75">
        <img src={`${data.img}`} alt="" className="w-16 h-16" />
        <h3 className="mt-auto text-white pb-14 text-lg text-center">
          {data.text}
        </h3>
      </div>
    </div>
  );
};
