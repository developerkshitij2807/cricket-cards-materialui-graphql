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
      console.log("came here");
      console.log(_id, photoUrl, name, age, team, matches);

      return { _id, photoUrl, name, age, team, matches };
    },
  },
};

export default playerResolvers;
