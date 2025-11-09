import Image from 'next/image';
import StarImage from '@/assets/star.svg';

export function StarRating({ rating }) {
  const stars = new Array(rating).fill(0);

  return (
    <>
      {stars.map((star, index) => (
        <Image
          key={index}
          src={StarImage}
          width={20}
          height={20}
          alt=''
        />
      ))}
    </>
  );
}
