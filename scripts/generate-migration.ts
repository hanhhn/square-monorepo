import { execSync } from 'child_process';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const name = args.name || 'Migration';
const timestamp = new Date()
  .toISOString()
  .replace(/[-:TZ.]/g, '') // e.g. 20250419T160022 -> 20250419160022
  .slice(0, 14);

const fullName = `${name}-${timestamp}`;

const command = `ts-node ./node_modules/typeorm/cli.js migration:generate apps/square-api/migrations/${fullName} -d apps/square-api/typeorm.config.ts`;

console.log(`Running: ${command}`);
execSync(command, { stdio: 'inherit' });
