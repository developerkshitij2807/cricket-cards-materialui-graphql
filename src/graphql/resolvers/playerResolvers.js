import Player from "@/models/playerModel";

const playerResolvers = {
  Query: {
    getPlayers: async () => {
      const players = await Player.find();
      return players;
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

    updatePlayerMutation: async (
      _parent,
      { _id, photoUrl, name, age, team, matches },
      _context
    ) => {
      const res = await Player.findByIdAndUpdate(_id, {
        photoUrl,
        name,
        age,
        team,
        matches,
      });

      return res;
    },
  },
};

export default playerResolvers;
