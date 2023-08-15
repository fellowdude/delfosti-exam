import { InternalServerErrorException } from '@nestjs/common';

export const handleDbException = (error: any) => {
  console.error(error);
  throw new InternalServerErrorException(
    error && error.message
      ? error.message
      : 'Something went wrong. Please try again later',
  );
};
