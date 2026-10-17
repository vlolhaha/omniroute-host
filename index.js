const { spawn } = require('child_process');
const port = process.env.SERVER_PORT || '20128';
const p = spawn('npx', ['omniroute', '--port', port], {
  stdio: 'inherit',
  env: { ...process.env, PORT: port, DATA_DIR: process.cwd() + '/data' }
});
p.on('exit', c => process.exit(c ?? 1));
