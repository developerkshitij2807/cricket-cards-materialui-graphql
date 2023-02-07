const playerResolvers = {
  Query: {
    getPlayers: () => {
      return [];
    },
  },
  Mutation: {
    createPlayerMutation: (
      _parent,
      { photoUrl, name, age, team, matches },
      _context
    ) => {
      console.log(photoUrl, name, age, team, matches);
      return { photoUrl, name, age, team, matches };
    },
  },
};

export default playerResolvers;
