#!/usr/bin/env bash

. ./_tools/buildenv
yarn install --frozen-lockfile

export BC_MINER_KEY="0x62b61f0b513c2fa26b28026219604947d3e0e492"
export BC_NETWORK="main"
export BC_FORCE_MINE=true
export BC_GRPC_MINER_ADDRESS=10.7.0.1:50052
export BC_MINER_WORKERS=5
export BC_TUNNEL_HTTPS=false
export BC_LOG_WAYPOINT_RECORD=true
export MIN_HEALTH_NET=true
export NODE_OPTIONS=--max_old_space_size=6096
#export BC_DEBUG=true
#export BC_LOG="debug"
./bin/cli start --rovers --rpc --ws --ui --node --scookie "correct-horse-battery-staple"