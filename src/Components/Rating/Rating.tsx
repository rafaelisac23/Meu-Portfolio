import { RatingType } from "@/Types/RatingType";

type Props = {
  data: RatingType;
};

export const Rating = ({ data }: Props) => {
  if (data.rating > 5) data.rating = 5;
  if (data.rating < 0) data.rating = 0;

  const emojis = ["☆", "★", "★", "★", "★", "★"];
  const notaInt = Math.floor(data.rating);

  const stars = emojis[notaInt].repeat(notaInt) + emojis[0].repeat(5 - notaInt);

  return (
    <div className="flex flex-col  w-28  justify-center items-center text-xl hover:scale-110">
      <div className="text-sm md:text-lg font-Montserrat text-mintcream ">
        {data.nameSkill}
      </div>
      <div className="text-white">{stars}</div>
    </div>
  );
};
