import { query } from "./_generated/server";

// Query: Fetch all tutors
export const listTutors = query({
  args: {},
  handler: async (ctx) => {
    const tutors = await ctx.db.query("tutors").collect();
    return tutors.map((t) => ({ ...t, id: t._id }));
  },
});
