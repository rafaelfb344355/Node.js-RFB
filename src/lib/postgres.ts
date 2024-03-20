import postgres from "postgres";

export const sql = postgres('postgresql://docker:docker@localhost5432/shortlinks')
