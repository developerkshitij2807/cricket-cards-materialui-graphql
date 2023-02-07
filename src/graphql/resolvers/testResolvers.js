const testResolvers = {
  Query: {
    testQuery: () => {
      return { name: "Next JS", id: "101" };
    },
  },
  Mutation: {
    testMutation: (_parent, { name, id }, _context) => {
      return { name, id };
    },
  },
};

export default testResolvers;
