export const generateRoomId = (user1, user2) => {
  const [first, second] = [user1, user2].sort();
  return `${first}_${second}`;
};
