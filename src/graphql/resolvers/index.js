import { mergeResolvers } from "@graphql-tools/merge";
import playerResolvers from "./playerResolvers";
import testResolvers from "./testResolvers";

const resolvers = mergeResolvers([testResolvers, playerResolvers]);

export default resolvers;
