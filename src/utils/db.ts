import type { QueryResultRow } from "pg";
import { Pool } from "pg";
import { env } from "../env";

export function getConnection(isLocal: boolean) {
  // if (isLocal) {
  //   return {
  //     host: env.DB_HOST as string,
  //     database: env.DB_DATABASE as string,
  //     port: env.DB_PORT as unknown as number,
  //     user: env.DB_USER as string,
  //     password: env.DB_PASS as string,
  //   };
  // } else {
  return {
    host: env.DB_HOST as string,
    database: env.DB_DATABASE as string,
    port: env.DB_PORT as unknown as number,
    user: env.DB_USER as string,
    password: env.DB_PASS as string,
    // TODO: Figure out SSL issues for Production
    //       https://stackoverflow.com/questions/76899023/rds-while-connection-error-no-pg-hba-conf-entry-for-host
    ssl: false,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  };
  // }
}

export const client = new Pool(getConnection(true));

function getFunctionSQL(
  functionName: string,
  ...params: any[]
): { sql: string; params: any[] } {
  const paramList = [...Array(params.length).keys()]
    .map((v) => "$" + (v + 1))
    .join(", ");

  return { sql: `SELECT * FROM ${functionName}(${paramList});`, params };
}

function getProcedureSQL(
  procedureName: string,
  ...params: any[]
): { sql: string; params: any[] } {
  const paramList = [...Array(params.length).keys()]
    .map((v) => "$" + (v + 1))
    .join(", ");
  return { sql: `CALL ${procedureName}(${paramList});`, params };
}

export async function querySQL<TResult extends QueryResultRow>(sql: string) {
  const result = await client.query<TResult>(sql);
  return result;
}

export async function query<TResult extends QueryResultRow>(
  functionName: string,
  ...functionParams: any[]
) {
  const { sql, params } = getFunctionSQL(functionName, ...functionParams);
  let result;
  try {
    result = await client.query<TResult>(sql, params);
  } catch (ex) {
    console.log(ex);
  }

  return result;
}

export async function exec<TResult extends QueryResultRow>(
  procName: string,
  ...procParams: any[]
) {
  const { sql, params } = getProcedureSQL(procName, ...procParams);
  const result = await client.query<TResult>(sql, params);
  return result;
}
