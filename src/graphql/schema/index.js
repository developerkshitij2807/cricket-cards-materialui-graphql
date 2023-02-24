import { mergeTypeDefs } from "@graphql-tools/merge";
import PlayerSchema from "./playerType";
import TestSchema from "./testType";

const typeDefs = mergeTypeDefs([PlayerSchema, TestSchema]);

export default typeDefs;
