import { sql } from "./lib/postgres";

async function setup() {
    await sql/*sql*/`
    CREAT TABLE IF NOT EXISTS short_links(
        id SERIAL PRIMARY KEY,
        code TEXT UNIQUE,
        original_url TEXT,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`

    await sql.end()
    console.log(`stup feito com sucesso!`)
}


setup()