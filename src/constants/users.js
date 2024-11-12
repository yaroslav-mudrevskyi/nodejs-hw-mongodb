export const emailRexExp =
  /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/;

export const accessTokenLifeTime = 1000 * 60 * 15;

export const refreshTokenLifeTime = 1000 * 60 * 60 * 24 * 30;
