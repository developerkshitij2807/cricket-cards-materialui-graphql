import Player from "@/models/playerModel";

const playerResolvers = {
  Query: {
    getPlayers: async () => {
      return await Player.find();
    },
  },
  Mutation: {
    createPlayerMutation: async (
      _parent,
      { photoUrl, name, age, team, matches },
      _context
    ) => {
      await Player.create({ photoUrl, name, age, team, matches });
      return { photoUrl, name, age, team, matches };
    },
  },
};

export default playerResolvers;
